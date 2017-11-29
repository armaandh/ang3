import { Component } from '@angular/core';
import { MyRemoteService } from './app.myremoteservice';
import { Router } from '@angular/router/src/router';

// This component consumes the re-usable service.
@Component({
    selector: 'app-root',
    templateUrl: "./home.html",
    // Providers allow us to inject an object instance through the constructor.
    providers: [MyRemoteService]
})
export class HomeComponent {
    names: Array<any> = [];
    x: string;
    x2: string;
    foundFahrenheit: boolean;
    foundCelsius: boolean;
    remoteService: MyRemoteService;
    celsiusInput: string = "";
    fahrenheitInput: string = "";

    // Since using a provider above we can receive service.
    constructor(_remoteService: MyRemoteService) {
        this.remoteService = _remoteService;
    }

    convertToC(_fahrenheitInput: string) {
        this.remoteService.getCelsius(_fahrenheitInput)
            // Subscribe to observable.
            .subscribe(
            // Success.
            data => {
                this.names = data
                console.log(JSON.stringify(data))
                //this.x = data["Celcius"];
                this.x2 = data["Celsius"];
                let y = 0;
                this.foundCelsius = true;

            },
            // Error.
            error => {
                alert(error)
            },
            // Final Instructions.
            () => {
                console.log("Finished")
            });

    }

    convertToF(_celsiusInput: string) {
        this.remoteService.getFahrenheit(_celsiusInput)
            // Subscribe to observable.
            .subscribe(
            // Success.
            data => {
                this.names = data
                console.log(JSON.stringify(data))
                this.x = data["Fahrenheit"];
                let y = 0;
                this.foundFahrenheit = true;
            },
            // Error.
            error => {
                alert(error)
            },
            // Final Instructions.
            () => {
                console.log("Finished")
            });

    }

    formatNumber(num) {
        return Math.floor(num);
    }
}
