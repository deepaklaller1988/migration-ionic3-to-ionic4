import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { PushNotificationService } from './pushnotification.servics';
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private users: AngularFirestoreCollection<{}>;
    private posts: AngularFirestoreCollection<{}>;
    private appId: string = 'e194af8d-50b1-4150-958d-afb0df854256';

    constructor(private afService: AngularFirestore,
        private pushNotificationService: PushNotificationService) {
        this.users = this.afService.collection('users');
        this.posts = this.afService.collection('posts');
    }

    submitPostSharedList(postId, uid) {
        return this.posts.doc(postId).collection('sharedBy').add({
            createdAt: Date.now(),
            type: 'share',
            sharedBy: uid
        });
    }

    storeStatusDetails(username, playerId, postText = null, isImgPost, isSharedPost, postPic, oldPostText = null, whosePost, postId, uid, thumbUrl) {
        return this.posts.add({
            createdAt: Date.now(),
            postText: postText,
            oldPostText: oldPostText,
            isImgPost: isImgPost,
            isSharedPost: isSharedPost,
            postPic: postPic,
            whosePost: whosePost,
            postedBy: uid,
            postPicThumb: thumbUrl
        }).then(res => {
            if (isSharedPost) {
                if (whosePost) {
                    if ((uid != whosePost)) {
                        this.users.doc(whosePost).collection('notifications').doc(postId + '-' + uid).set({
                            createdAt: Date.now(),
                            event: 'shared',
                            uid: uid,
                            postId: postId,
                            read: false
                        }).then(() => {
                            if (playerId != 'noId') {
                                let message = {
                                    app_id: this.appId,
                                    contents: { "en": username + ' shared your post' },
                                    include_player_ids: [playerId]
                                }
                                this.pushNotificationService.sendNotification(message).subscribe(res => { });
                            }
                        });
                    }
                }
            }
        });
    }
}
