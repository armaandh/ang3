import { Component } from '@angular/core';
import { Router } from '@angular/router/src/router';
import { MyRemoteService } from './app.myremoteservice';

// This component consumes the re-usable service.
@Component({
  templateUrl: './feedback.html',
  providers: [MyRemoteService]
})
export class AppFeedbackComponent {

  emailAddress: string;
  feedbackMsg: string;
  feedbackResponseMsg: string;
  feedbackResponseStatus: string;

  remoteService: MyRemoteService;


  // Since using a provider above we can receive service.
  constructor(_remoteService: MyRemoteService) {
    this.remoteService = _remoteService;

  }

  testPattern(input) {
    let VALID_EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (input != "" && VALID_EMAIL_PATTERN.test(input)) {
      alert("You entered a valid address.");
      return true;
    }
    if (input != "" && !VALID_EMAIL_PATTERN.test(input)) {
      alert("Invalid Email. No form has been submitted. Please try again.");
      return false;
    }

  }

  postFeedback(emailAddress) {
    if (this.testPattern(emailAddress) == false) {
      return;
    }
    // Create the JavaScript object in the format
    // required by the server.
    let FeedBackObject = {
      "Email": this.emailAddress,
      "Message": this.feedbackMsg
    }

    this.remoteService.postName(FeedBackObject)
      // Subscribe to observable.
      .subscribe(

      // Success.
      data => {
        this.feedbackResponseMsg = data["Message"];
        this.feedbackResponseStatus = data["Status"];
        console.log(data)
      },
      // Error.
      error => {
        alert(error)
      },
      // Final instructions.
      () => {
        console.log("Finished")
        this.emailAddress = "";
        this.feedbackMsg = "";

      });
  }
}
