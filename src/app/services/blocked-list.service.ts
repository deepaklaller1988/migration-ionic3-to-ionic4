import { Injectable } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class BlockedListService {
  unblockClass=false;
  block=false;
  unblock=true;
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  blockUser(){	
  	this.unblock=!this.unblock;
  	this.block=!this.block;
  	this.unblockClass=!this.unblockClass;
  }
  
blockedUser=[
		        {'img': 'assets/img/profile.jpg',
		          'name': 'John Rambo',
		         'description':'From San Fancisco,USA'
		        },
		        {'img': 'assets/img/profile3.jpg',
		          'name': 'Kethli Rhonda',
		         'description':'From California,USA'
		        },
		        {'img': 'assets/img/profile5.jpg',
		          'name': 'John Rambo',
		         'description':'From Bangaluru, India'
		        },
		        {'img': 'assets/img/profile.jpg',
		          'name': 'Jenny John',
		         'description':'From San Fancisco,USA'
		        },
		        {'img': 'assets/img/profile.jpg',
		          'name': 'John Rambo',
		         'description':'From San Fancisco,USA'
		        },
		        {'img': 'assets/img/profile3.jpg',
		          'name': 'Kethli Rhonda',
		         'description':'From California,USA'
		        },
		        {'img': 'assets/img/profile5.jpg',
		          'name': 'John Rambo',
		         'description':'From Bangaluru, India'
		        },
		        {'img': 'assets/img/profile.jpg',
		          'name': 'Jenny John',
		         'description':'From San Fancisco,USA'
		        },

		]
}
