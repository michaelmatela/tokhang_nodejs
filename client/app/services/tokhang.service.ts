import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TokhangService{
    constructor(private http:Http){
        console.log('Tokhang Service Initialized...');
    }
    
    getTokhangs(){
        return this.http.get('http://localhost:3000/api/tokhangs')
            .map(res => res.json());
    }
    
    addTokhang(newTokhang){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/api/tokhangs', JSON.stringify(newTokhang), {headers: headers})
            .map(res => res.json());
    }
    
    deleteTokhang(id){
        return this.http.delete('http://localhost:3000/api/tokhangs/'+id)
            .map(res => res.json());
    }
    
    updateStatus(tokhang){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.put('http://localhost:3000/api/tokhangs/'+tokhang._id, JSON.stringify(tokhang), {headers: headers})
            .map(res => res.json());
    }
}