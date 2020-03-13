import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogContactComponent } from 'src/app/dialog-contact/dialog-contact.component';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { MatSnackBar } from '@angular/material';
import { CountoModule }  from 'angular2-counto';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  contactForm: FormGroup;
  public isMobileLayout = false;
  public innerWidth: any;

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private translate: TranslateService  
  ) { }

  ngOnInit() {
    this.createContactForm();    
  }

  private createContactForm() {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.required]]
    })
  }

  isMobile(){
    if (this.innerWidth < 850) {
      return true
    }
    else if (this.innerWidth >= 850) {
      return false
    }
  }

  currentLanguage() {
    return this.translate.currentLang;
  }

  openSnackBar() {        
    this.snackBar.open('Mail cargado con exito', 'Aceptar', { duration: 1500 });
  }

  openDialog() {
    this.dialog.open(DialogContactComponent);
  }

  productos: string[] = ['Thuban', 'Captika'];
}
