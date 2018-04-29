import { Component } from '@angular/core';
import {TokhangService} from '../../services/tokhang.service';
import {Tokhang} from '../../../Tokhang';

@Component({
  moduleId: module.id,
  selector: 'tokhangs',
  templateUrl: 'tokhangs.component.html'
})

export class TokhangsComponent { 
    tokhangs: Tokhang[];
    firstname: string;
    lastname: string;
    
    constructor(private tokhangService:TokhangService){
        this.tokhangService.getTokhangs()
            .subscribe(tokhangs => {
                this.tokhangs = tokhangs;
            });
    }
    
    addTokhang(event){
        event.preventDefault();
        var newTokhang = {
            firstname: this.firstname,
            lastname: this.lastname,
            isjailed: false
        }
        
        this.tokhangService.addTokhang(newTokhang)
            .subscribe(tokhang => {
                this.tokhangs.push(tokhang);
                this.firstname = '';
                this.lastname = '';
            });
    }
    
    deleteTokhang(id){
        var tokhangs = this.tokhangs;
        
        this.tokhangService.deleteTokhang(id).subscribe(data => {
            if(data.n == 1){
                for(var i = 0;i < tokhangs.length;i++){
                    if(tokhangs[i]._id == id){
                        tokhangs.splice(i, 1);
                    }
                }
            }
        });
    }
    
    updateStatus(tokhang){
        var _tokhang = {
            _id:tokhang._id,
            firstname: tokhang.firstname,
            lastnamename: tokhang.lastname,
            isjailed: !tokhang.isjailed
        };
        
        this.tokhangService.updateStatus(_tokhang).subscribe(data => {
            tokhang.isjailed = !tokhang.isjailed;
        });
    }
}