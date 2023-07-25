import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IpService } from './ip.service';
import { Storage } from '@ionic/storage-angular';
import { JwtHelperService } from '@auth0/angular-jwt';
const TOKEN_KEY_Guide = 'token-key-guide';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root',
})
export class GuideService {
  GuideToken: any;
  public GuideId: any;

  constructor(
    private http: HttpClient,
    private ipservice: IpService,
    private storage: Storage
  ) {
    this.storage.get(TOKEN_KEY_Guide).then(async (res) => {
      this.GuideToken = await res;
      let decoded = await helper.decodeToken(this.GuideToken);
      this.GuideId = await decoded.guideId;
    });
  }
  getAllGuide() {
    return this.http.get(`${this.ipservice.ip}/guides/getAllGuide`);
  }
  getNameGuide() {
    return this.http.get(`${this.ipservice.ip}/users/getAllNameUser`);
  }
  getPropTrip() {
    return this.http.get(
      `${this.ipservice.ip}/proposedCircuits/getAllProposedCircuit`
    );
  }
  updateStatusTrip(trip: any) {
    return this.http.patch(
      `${this.ipservice.ip}/proposedCircuits/updateTripStatus`,
      trip
    );
  }
  updateStatusTripPrincipale(trip: any) {
    return this.http.patch(
      `${this.ipservice.ip}/proposedCircuits/updateTripStatuspricipale`,
      trip
    );
  }

  PostPublicTrip(trip: any) {
    return this.http.post(
      `${this.ipservice.ip}/publicCircuits/setPubliccCircuit`,
      trip
    );
  }
  PostPrivateTrip(trip: any) {
    return this.http.post(
      `${this.ipservice.ip}/privateCircuits/setPrivatecCircuit`,
      trip
    );
  }
  getAllPrivateTrip() {
    return this.http.get(
      `${this.ipservice.ip}/privateCircuits/getAllPrivatecCircuit`
    );
  }
}
