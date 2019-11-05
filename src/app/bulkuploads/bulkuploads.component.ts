import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bulkuploads',
  templateUrl: './bulkuploads.component.html',
  styleUrls: ['./bulkuploads.component.scss']
})
export class BulkuploadsComponent implements OnInit {

  constructor() { }

  showUploadModal;
  uploadmodal;
  showViewDeatilsModal;
  viewdetailsmodal;
  viewuploadusersmodal;
  showUploadUserModal;
  uploadusermodal;
  showErrorUserModal;
  errorUserModal;
  errorusermodal;
  createmodal;
  errorrejectmodal;
  showCreateModal;
  showErrorRejectModal;

  pageTitle = 'Modals';
  uploadModalCode = ` <div class="sb-bulk-upload">
  <h4 class="my-16 bulk-upload-title">Bulk Content Upload</h4>
  <button class="sb-btn sb-btn-primary sb-btn-normal" (click)="showUploadModal = !showUploadModal">
      <i class="upload icon"></i> Upload .CSV file
  </button>
  <div class="bulk-content-upload-info mt-16">
      <p>Please upload the CSV file in the required format “Sample Upload CSV File”. Refer “user Guide” for
      instructions and guidelines to follow.</p>
  </div>
  <h4 class="mt-16 bulk-upload-title">Last upload file</h4>
<div class="sb-bulk-upload-details-report-info d-flex flex-ai-center">
    <div class="py-16 sb-bulk-upload-file d-flex flex-ai-center">
        <img src="" alt="" class="sb-upload-file mr-15">
        <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
    </div>
    <div class="sb-bulk-upload-status">
        <div class="sb-label sb-label-table sb-label-gray-0">In progress</div>
    </div>
    <div class="sb-bulk-upload-details-report flex-jc-flex-end d-flex">
        <button type="button" class="sb-btn sb-btn-outline-primary sb-btn-normal ">View Report</button>
    </div>
</div>
<div class="sb-bulk-upload-details-report-info d-flex flex-ai-center">
    <div class="py-16 sb-bulk-upload-file d-flex flex-ai-center">
        <img src="" alt="" class="sb-upload-file mr-15">
        <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
    </div>
    <div class="sb-bulk-upload-status">
        <div class="sb-label sb-label-table sb-label-error-0"><i class="exclamation circle icon"></i>Completed
        with errors</div>
    </div>
    <div class="sb-bulk-upload-details-report flex-jc-flex-end d-flex">
        <button type="button" class="sb-btn sb-btn-outline-primary sb-btn-normal ">View Report</button>
    </div>
</div>
<div class="sb-bulk-upload-details-report-info d-flex flex-ai-center">
    <div class="py-16 sb-bulk-upload-file d-flex flex-ai-center">
        <img src="" alt="" class="sb-upload-file mr-15">
        <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
    </div>
    <div class="sb-bulk-upload-status">
        <div class="sb-label sb-label-table sb-label-success-0">completed</div>
    </div>
    <div class="sb-bulk-upload-details-report flex-jc-flex-end d-flex">
        <button type="button" class="sb-btn sb-btn-outline-primary sb-btn-normal ">View Report</button>
    </div>
</div>
</div>


<sui-modal *ngIf="showUploadModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
  [size]="'normal'" class="sb-modal" appBodyScroll (dismissed)="showUploadModal = !showUploadModal" #modal>
  <div class="sb-modal-header">
      Upload .CSV file
  </div>
  <div class="sb-modal-content">
      <p class="m-0">Please upload the CSV file in the required format</p>
      <div class="pt-16 sb-bulk-upload-file d-flex flex-ai-center">
          <img src="" alt="" class="sb-upload-file mr-15">
          <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
      </div>
      <div class="sb-bulk-upload-error-info pt-16">
        <label class="ui basic error label p-0">Validation Error ! <span class="sb-bulk-upload-extra-label">Rectify the errors and upload the file again.</span></label>
        <ul class="sb-bulk-upload-error-list mt-16 p-0 m-0">
            <li class="sb-bulk-upload-error-list-item">Mandaory column “xyz” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Mondatory coloumn “Pqr” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Column “123” contains invalid data</li>
            <li class="sb-bulk-upload-error-list-item">Mandaory column “xyz” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Mondatory coloumn “Pqr” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Column “123” contains invalid data</li>
            <li class="sb-bulk-upload-error-list-item">Mandaory column “xyz” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Mondatory coloumn “Pqr” is missing</li>
            <li class="sb-bulk-upload-error-list-item">Column “123” contains invalid data</li>
          </ul>
      </div>
      <div class="sb-btn sb-btn-tertiary sb-btn-normal mt-16 sb-bulk-upload-btn">
          Change CSV file
          <input type="file" class="sb-btn-upload" name="file"/>
        </div>
      <div class="d-flex flex-w-wrap sb-bulk-upload-options pt-30">
        <div class="sb-radio-btn-checkbox sb-radio-btn-primary">
          <input type="radio" id="radio1" name="example">
          <label for="radio1">Publish & Link to Textbook</label>
        </div>
        <div class="sb-radio-btn-checkbox sb-radio-btn-primary ml-8">
          <input type="radio" id="radio2" name="example">
          <label for="radio2">Publish</label>
        </div>
      </div>
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="showViewDeatilsModal = !showViewDeatilsModal">
      Start Upload
    </button>
  </div>
</sui-modal>
`;
ViewDeatilsModalCode = `<div class="docs-sectionDemoCode">
<button class="sb-btn sb-btn-primary sb-btn-normal" (click)="showViewDeatilsModal = !showViewDeatilsModal">
  View Report
</button>
<sui-modal *ngIf="showViewDeatilsModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
  [size]="'normal'" class="sb-modal sb-success" appBodyScroll (dismissed)="showViewDeatilsModal = !showViewDeatilsModal" #modal>
  <div class="sb-modal-header">
      View Details
  </div>
  <div class="sb-modal-content">
      <div class="sb-bulk-upload-file d-flex flex-ai-center">
          <img src="" alt="" class="sb-upload-file mr-15">
          <span class="sb-bulk-upload-content-title">Dummy Text.CSV</span>
      </div>
      <div class="sb-meta-data-container sb-meta-data-row-facing">
          <dl class="sb-meta-data sb-meta-d1 m-0">
              <dt>Title</dt>
              <dd>SNF Chapter 1 Kalrav Hindi</dd>
              <dt>Ownership</dt>
              <dd></dd>
              <dt>Organization</dt>
              <dd>NTP</dd>
              <dt>Author</dt>
              <dd>Balaji A</dd>
              <dt>Medium</dt>
              <dd></dd>
            </dl>
      </div>
  </div>
  <div class="sb-modal-actions">
    <button class="sb-btn sb-btn-secondary sb-btn-normal mr-8 ripple" (click)="showViewDeatilsModal = !showViewDeatilsModal">
      Download Report
    </button>
  </div>
</sui-modal>
</div>`
ViewUploadUsersModalCode = `   <sui-modal *ngIf="showUploadUserModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
[size]="'normal'" class="sb-modal" appBodyScroll (dismissed)="showUploadUserModal = !showUploadUserModal" #modal>
<div class="sb-modal-header">
  Upload Users
</div>
<div class="sb-modal-content">
  <div class="m-0">
    <span class="m-0 mr-16">Please upload the CSV file</span>
    <button type="button" class="sb-btn sb-btn-normal sb-btn-link sb-btn-link-primary">Download Sample
      CSV</button>
  </div>

  <div class="sb-btn sb-btn-tertiary sb-btn-normal mt-8 sb-bulk-upload-btn">
    Upload CSV file
    <input type="file" class="sb-btn-upload" name="file" />
  </div>
  <div class="ui info message">
    <div class="header">
      Instructions:
    </div>
    <ol class="ui list">
      <li>Download the CSV file. Users belonging to a single organization can be uploaded at a time in one CSV
        file. </li>
      <li>Enter the following mandatory details of user accounts:
        <ol>
          <li>FirstName: User’s first name, alphabetic value.</li>
          <li>Phone or Email: User’s phone number (ten digit mobile number) or email ID. One of the two have to be
            provided, however, it is advisable to provide both if available.</li>
          <li>Username: Unique name assigned to the user by the organization, alphanumeric.</li>
        </ol>
      </li>
    </ol>
    <p>Note: All other columns in the CSV file are optional, for details on filling these, refer to</p>
  </div>
</div>
<div class="sb-modal-actions">
  <button class="sb-btn sb-btn-normal sb-btn-primary" (click)="showViewDeatilsModal = !showViewDeatilsModal">
    Upload Users CSV
  </button>
</div>
</sui-modal>`
ViewErrorUsersModalCode = `  <sui-modal *ngIf="showErrorUserModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
[size]="'normal'" class="sb-modal sb-error" appBodyScroll (dismissed)="showErrorUserModal = !showErrorUserModal" #modal>
<div class="sb-modal-header">
  Error in Upload Users
</div>
<div class="sb-modal-content">
  <div class="ui error message">
    <div class="header">
      Errors:
    </div>
    <ol class="ui list">
      <li>Download the CSV file. Users belonging to a single organization can be uploaded at a time in one CSV
        file. </li>
      <li>Enter the following mandatory details of user accounts:
        <ol>
          <li>FirstName: User’s first name, alphabetic value.</li>
          <li>Phone or Email: User’s phone number (ten digit mobile number) or email ID. One of the two have to be
            provided, however, it is advisable to provide both if available.</li>
          <li>Username: Unique name assigned to the user by the organization, alphanumeric.</li>
        </ol>
      </li>
    </ol>
    <p>Note: All other columns in the CSV file are optional, for details on filling these, refer to</p>
  </div>
</div>
<div class="sb-modal-actions">
  <button class="sb-btn sb-btn-normal  sb-btn-error" (click)="showViewDeatilsModal = !showViewDeatilsModal">
    Copy to clipboard
  </button>
</div>
</sui-modal>`

ViewCreateModalCode = ` <sui-modal *ngIf="showCreateModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
[size]="'normal'" class="sb-modal" appBodyScroll (dismissed)="showCreateModal = !showCreateModal" #modal>
<div class="sb-modal-header">
  Create
</div>
<div class="sb-modal-content">
  <div class="twelve wide column">
    <div class="ui grid m-0">
      <div class="three wide column p-8">
        <div class="ui card text-center common-contribution-card">
          <div class="content">
            <i class="check circle icon"></i>
            <img class="mt-16" src="assets/images/book.png" rel="placeholder">
            <div class="content-title py-16">Course</div>
          </div>
        </div>
      </div>
      <div class="three wide column p-8">
        <div class="ui card text-center common-contribution-card">
          <div class="content">
            <i class="check circle icon"></i>
            <img class="mt-16" src="assets/images/book.png" rel="placeholder">
            <div class="content-title py-16">Explanation </div>
          </div>
        </div>
      </div>
      <div class="three wide column p-8">
        <div class="ui card text-center common-contribution-card">
          <div class="content">
            <i class="check circle icon"></i>
            <img class="mt-16" src="assets/images/book.png" rel="placeholder">
            <div class="content-title py-16">Lesson PLans</div>
          </div>
        </div>
      </div>
      <div class="three wide column p-8">
        <div class="ui card text-center common-contribution-card">
          <div class="content">
            <i class="check circle icon"></i>
            <img class="mt-16" src="assets/images/book.png" rel="placeholder">
            <div class="content-title py-16">Practice Sets</div>
          </div>
        </div>
      </div>
      <div class="three wide column p-8">
        <div class="ui card text-center common-contribution-card">
          <div class="content">
            <i class="check circle icon"></i>
            <img class="mt-16" src="assets/images/book.png" rel="placeholder">
            <div class="content-title py-16">Curiosity</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="sb-modal-actions">
  <button class="sb-btn sb-btn-normal sb-btn-primary"
    (click)="showViewCreateModalCode = !showViewCreateModalCode">
    Next
  </button>
</div>
</sui-modal>`

showViewDeatilsErrorCode = `<sui-modal *ngIf="showErrorRejectModal" [mustScroll]="true" [isClosable]="true" [transitionDuration]="0"
[size]="'normal'" class="sb-modal sb-error" appBodyScroll
(dismissed)="showErrorRejectModal = !showErrorRejectModal" #modal>
<div class="sb-modal-header">
  Reject “Untitled Practice Set “
</div>
<div class="sb-modal-content">
  <div class="ui error reject message">
    <ol class="pl-8">
      <li>You have rejected 3 of 12 questions in this set. Puclishing . This set would publish the 9 accepted
        question only.
        Click Continue to Publish the set.. </li>
      <li>You have rejected 3 of 12 questions in this set. Puclishing . This set would publish the 9 accepted
        question only.
        Click Continue to Publish the set.
      </li>
      <li>You have rejected 3 of 12 questions in this set. Puclishing . This set would publish the 9 accepted
        question only.
        Click Continue to Publish the set.
      </li>
    </ol>
  </div>
</div>
<div class="sb-modal-actions">
  <button class="sb-btn sb-btn-normal  sb-btn-error"
    (click)="showViewDeatilsErrorModal = !showViewDeatilsErrorModal">
    Send Feedback
  </button>
</div>
</sui-modal>`
;

  ngOnInit() {
  }

}
