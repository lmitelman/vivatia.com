import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators'
import { TransitiveCompileNgModuleMetadata } from '@angular/compiler';

@Injectable()
export class AdminService {

    constructor(
        private http: HttpClient,
    ) { }
    /**
    * Gets a temporary token to be used for all interactions with server
    * @param params: email: usuario de thuban,
    *                password: password del usuario de thuban    
    * @returns response 
    *   {
    *       data: {
    *           msg: "string"
    *       }
    *   }
    */

    createDocument(params): Observable<any> {
        return this.http.post(environment.thubanUrl + '/createDocument', {
            "tokenAuthentication": (<any>window).token,
            "documentClass": "HLT_COMPROBANTES",
            "fields": [
                {
                    "key": "T_FACTURA",
                    "value": params.billType,
                    "dataType": "email"
                }
            ]
        }).pipe(
            map((data: any) => {
                if (data.codRet == "00") {
                    return true;
                }
                throw new HttpErrorResponse({ status: 401, statusText: data.errorMessage, error: data.codRet + ' ' + data.msg });
            })
        )
    }
}

    

