// import jwt_decode from "jwt-decode";
import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";



import { environment } from "../environments/environment.desarrollo";
import { User } from './User';


export default function getUserInfo(): User {

    let cookie = getCookie('JWT');
    // if (!environment.prodesduction) {

    // medico : doctor.estevez@gmail.com

    // cookie = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFbXBsZWFkb3JOdW1lcm8iOjAsIlVzdWFyaW9DZWR1bGEiOiIwMDExNDkwMTkyOSIsIlVzdWFyaW9DdWVudGEiOiJkb2N0b3IuZXN0ZXZlekBnbWFpbC5jb20iLCJVc3VhcmlvTm9tYnJlcyI6IlJhZmFlbCBFcm5lc3RvIEVzdGV2ZXogSGVybmFuZGV6IChNw6lkaWNvKSIsIlVzdWFyaW9Oc3MiOjE1ODcxODY1LCJVc3VhcmlvUmVnaXN0cm9QYXRyb25hbCI6MCwiVXN1YXJpb1RpcG8iOjMsIkluc3RpdHVjaW9uTnVtZXJvIjowLCJFbnRpZGFkTm9tYnJlIjoiUGVyc29uYWwiLCJBcnNOdW1lcm8iOjAsIlByZXN0YWRvcmFOdW1lcm8iOjAsInJvbGVzIjpbXX0.duDRflCUYbwU2t3t_0Binf-5pTuAA4n3wjkcojvhrsE'
    // Empresa
    // cookie = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFbXBsZWFkb3JOdW1lcm8iOjAsIlVzdWFyaW9DZWR1bGEiOiIwMDExNDA3ODkyNiIsIlVzdWFyaW9DdWVudGEiOiJ5aWNhdXJ5LmdvbnphbGV6QG1pbmVyZC5nb2IuZG8iLCJVc3VhcmlvTm9tYnJlcyI6IllpY2F1cnkgTWFybG90dGUgR29uemFsZXogKEVudGlkYWRQw7pibGljYSkgIiwiVXN1YXJpb05zcyI6MTE1MDA2NTEsIlVzdWFyaW9SZWdpc3Ryb1BhdHJvbmFsIjo0Nzc3MjMsIlVzdWFyaW9UaXBvIjoxMiwiSW5zdGl0dWNpb25OdW1lcm8iOjAsIkVudGlkYWROb21icmUiOiJNSU5JU1RFUklPIERFIEVEVUNBQ0lPTiIsIkFyc051bWVybyI6MCwiUHJlc3RhZG9yYU51bWVybyI6MCwicm9sZXMiOlt7IlVzdWFyaW9fUm9sX051bWVybyI6NCwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJDb25zdWx0YXMifSx7IlVzdWFyaW9fUm9sX051bWVybyI6NiwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJHZXN0acOzbiBIdW1hbmEifSx7IlVzdWFyaW9fUm9sX051bWVybyI6NSwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJPcGVyYWNpb25lcyJ9XX0.nn7MH_rWJJ6CyPAg543eiH0L16hHGs1B7dqe5kjyTPo";
    //medico 
    // cookie = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFbXBsZWFkb3JOdW1lcm8iOjAsIlVzdWFyaW9DZWR1bGEiOiIwNTQwMDY2NDk5MCIsIlVzdWFyaW9DdWVudGEiOiJyb2phc2Zlcm5hbmRvNzBAeWFob28uY29tIiwiVXN1YXJpb05vbWJyZXMiOiJGZXJuYW5kbyBBcnR1cm8gUm9qYXMgTWVqaWEgKE3DqWRpY28pIiwiVXN1YXJpb05zcyI6NDY3NzgxODgsIlVzdWFyaW9SZWdpc3Ryb1BhdHJvbmFsIjowLCJVc3VhcmlvVGlwbyI6MywiSW5zdGl0dWNpb25OdW1lcm8iOjAsIkVudGlkYWROb21icmUiOiJQZXJzb25hbCIsIkFyc051bWVybyI6MCwiUHJlc3RhZG9yYU51bWVybyI6MCwicm9sZXMiOltdfQ.mODiFi96aV1ansbXqQ9Glqln-wbyYN9J3R6s5k-VjHw'


    //Rafael Hernandez 
    // cookie = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFbXBsZWFkb3JOdW1lcm8iOjAsIlVzdWFyaW9DZWR1bGEiOiIwMDExNDkwMTkyOSIsIlVzdWFyaW9DdWVudGEiOiJkb2N0b3IuZXN0ZXZlekBnbWFpbC5jb20iLCJVc3VhcmlvTm9tYnJlcyI6IlJhZmFlbCBFcm5lc3RvIEVzdGV2ZXogSGVybmFuZGV6IChNw6lkaWNvKSIsIlVzdWFyaW9Oc3MiOjE1ODcxODY1LCJVc3VhcmlvUmVnaXN0cm9QYXRyb25hbCI6MCwiVXN1YXJpb1RpcG8iOjMsIkluc3RpdHVjaW9uTnVtZXJvIjowLCJFbnRpZGFkTm9tYnJlIjoiUGVyc29uYWwiLCJBcnNOdW1lcm8iOjAsIlByZXN0YWRvcmFOdW1lcm8iOjAsInJvbGVzIjpbXX0.duDRflCUYbwU2t3t_0Binf-5pTuAA4n3wjkcojvhrsE'

    // ARS 
    // cookie = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFbXBsZWFkb3JOdW1lcm8iOjAsIlVzdWFyaW9DZWR1bGEiOiIwMDExODA3MjI2MyIsIlVzdWFyaW9DdWVudGEiOiJ2aXJnaW5pYV92aXpjYWlub0BhcnNwYWxpYy5jb20uZG8iLCJVc3VhcmlvTm9tYnJlcyI6IlZpcmdpbmlhIEFkZWxhaWRhIFZpemNhaW5vIEhlcm5hbmRleiAoQXJzKSIsIlVzdWFyaW9Oc3MiOjU4NDA1MDI1MiwiVXN1YXJpb1JlZ2lzdHJvUGF0cm9uYWwiOjQ2ODM0NSwiVXN1YXJpb1RpcG8iOjQsIkluc3RpdHVjaW9uTnVtZXJvIjoxMTUsIkVudGlkYWROb21icmUiOiJBRE1JTklTVFJBRE9SQSBERSBSSUVTR09TIERFIFNBTFVEIFBBTElDIFMgQSIsIkFyc051bWVybyI6NDksIlByZXN0YWRvcmFOdW1lcm8iOjAsInJvbGVzIjpbeyJVc3VhcmlvX1JvbF9OdW1lcm8iOjEwLCJVc3VhcmlvX1JvbF9EZXNjcmlwY2lvbiI6IkFjY2lkZW50ZSBUcsOhbnNpdG8ifSx7IlVzdWFyaW9fUm9sX051bWVybyI6NCwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJDb25zdWx0YXMifSx7IlVzdWFyaW9fUm9sX051bWVybyI6NiwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJHZXN0acOzbiBIdW1hbmEifSx7IlVzdWFyaW9fUm9sX051bWVybyI6NSwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJPcGVyYWNpb25lcyJ9LHsiVXN1YXJpb19Sb2xfTnVtZXJvIjoyNiwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJQcm95ZWN0byBTQlIifSx7IlVzdWFyaW9fUm9sX051bWVybyI6OSwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJTaW1vbiBDYXJnYSJ9LHsiVXN1YXJpb19Sb2xfTnVtZXJvIjoxMSwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJTaW1vbiBUcmFzcGFzb3MifSx7IlVzdWFyaW9fUm9sX051bWVybyI6MzIsIlVzdWFyaW9fUm9sX0Rlc2NyaXBjaW9uIjoiU29saWNpdGFyIFVzdWFyaW9zIGRlIFRyYXNwYXNvcyJ9XX0.FuYn1iVmcMy56irTtJO_z2H8-OWgYeTRKrYCk87aoTc'
    // cookie = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFbXBsZWFkb3JOdW1lcm8iOjAsIlVzdWFyaW9DZWR1bGEiOiIwMDExNjMwNDk0MCIsIlVzdWFyaW9DdWVudGEiOiJmcGVndWVyb0BnbWFpbC5jb20iLCJVc3VhcmlvTm9tYnJlcyI6IkZyYW5jaXNjbyBBbnRvbmlvIFBlZ3Vlcm8gQWxjYW50YXJhIChSZXByZXNlbnRhbnRlRGUgRW1wcmVzYSBTdWJzaWRpb3MpICIsIlVzdWFyaW9Oc3MiOjE3NTI2MjIxLCJVc3VhcmlvUmVnaXN0cm9QYXRyb25hbCI6MjM1LCJVc3VhcmlvVGlwbyI6MTYsIkluc3RpdHVjaW9uTnVtZXJvIjowLCJFbnRpZGFkTm9tYnJlIjoiUGVyc29uYWwiLCJBcnNOdW1lcm8iOjAsIlByZXN0YWRvcmFOdW1lcm8iOjAsInJvbGVzIjpbXX0.oTC3q1MrnOxZQ6p9qkFFPNHNuWx194Nk3_YfMrGZFlc"
    // }


    if (cookie) {
        const result = jwtDecode<User>(cookie);
        // var result = jwt_decode<User>(cookie);
        return result
    }

    // jwt_decode<User>(cookie);

    document.location.href = environment.urlOficinaVirtualLogin


    return null!
}



function getCookie(name: string): string {
    let ca: Array<string> = document.cookie.split(';');
    let caLen: number = ca.length;
    let cookieName = `${name}=`;
    let c: string;

    for (let i: number = 0; i < caLen; i += 1) {
        c = ca[i].replace(/^\s+/g, '');

        if (c.indexOf(cookieName) == 0)
            return c.substring(cookieName.length, c.length);
    }
    return '';
}
