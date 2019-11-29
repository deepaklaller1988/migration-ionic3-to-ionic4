import { TestBed } from '@angular/core/testing';
import { HomeService } from './home.service';
describe('HomeService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));
    it('should be created', () => {
        const service = TestBed.get(HomeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=home.service.spec.js.map