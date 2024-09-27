// import jwt_decode from "jwt-decode";
import jwt_decode from "jwt-decode";
import { jwtDecode } from "jwt-decode";



import { environment } from "../environments/environment.desarrollo";
import { User } from './User';


export default function getUserInfo(): User {

    let cookie = getCookie('JWT');
    // if (!environment.prodesduction) {
    cookie = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJFbXBsZWFkb3JOdW1lcm8iOjAsIlVzdWFyaW9DZWR1bGEiOiIwMDExNDA3ODkyNiIsIlVzdWFyaW9DdWVudGEiOiJ5aWNhdXJ5LmdvbnphbGV6QG1pbmVyZC5nb2IuZG8iLCJVc3VhcmlvTm9tYnJlcyI6IllpY2F1cnkgTWFybG90dGUgR29uemFsZXogKEVudGlkYWRQw7pibGljYSkgIiwiVXN1YXJpb05zcyI6MTE1MDA2NTEsIlVzdWFyaW9SZWdpc3Ryb1BhdHJvbmFsIjo0Nzc3MjMsIlVzdWFyaW9UaXBvIjoxMiwiSW5zdGl0dWNpb25OdW1lcm8iOjAsIkVudGlkYWROb21icmUiOiJNSU5JU1RFUklPIERFIEVEVUNBQ0lPTiIsIkFyc051bWVybyI6MCwiUHJlc3RhZG9yYU51bWVybyI6MCwicm9sZXMiOlt7IlVzdWFyaW9fUm9sX051bWVybyI6NCwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJDb25zdWx0YXMifSx7IlVzdWFyaW9fUm9sX051bWVybyI6NiwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJHZXN0acOzbiBIdW1hbmEifSx7IlVzdWFyaW9fUm9sX051bWVybyI6NSwiVXN1YXJpb19Sb2xfRGVzY3JpcGNpb24iOiJPcGVyYWNpb25lcyJ9XX0.nn7MH_rWJJ6CyPAg543eiH0L16hHGs1B7dqe5kjyTPo";
    // }


    if (cookie) {
        const result = jwtDecode<User>(cookie);
        console.log('login');
        console.log(result);
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
