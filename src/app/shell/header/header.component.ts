import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Router, Route } from '@angular/router';
import {Location} from '@angular/common';
import { AuthenticationService, CredentialsService, I18nService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuHidden = true;
  @Input() isBack: boolean = false;
  @Input() title: string;
  private className:string = '';

  constructor(
    private router: Router,
    private location: Location,
    private authenticationService: AuthenticationService,
    private credentialsService: CredentialsService,
    private i18nService: I18nService
  ) {}

  ngOnInit() {}

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout().subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  /**
   * Handle to add class in header
   */
  @HostListener('window:scroll', ['$event'])
  public windowScrolled($event: Event) {
    if(window.pageYOffset>100){
      this.className = "sticky-header";
    }else{
      this.className = "";
    }
  }

  get currentLanguage(): string {
    return this.i18nService.language;
  }

  get languages(): string[] {
    return this.i18nService.supportedLanguages;
  }

  get username(): string | null {
    const credentials = this.credentialsService.credentials;
    return credentials ? credentials.username : null;
  }
  get class():string{
    return this.className;
  }
  /**
   * Go to Prev page.
   */
  goBack(){
    this.location.back();
  }
}
