import { Component, OnInit, Input } from '@angular/core';
import domtoimage from 'dom-to-image';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-mealplan',
  templateUrl: './mealplan.component.html',
  styleUrls: ['./mealplan.component.scss'],
})
export class MealplanComponent implements OnInit {
  constructor() {}
  @Input() plannedMeal;

  ngOnInit(): void {}
  downloadPDF() {
    var node = document.getElementById('parentdiv');

    var img;
    var filename;
    var newImage;

    domtoimage
      .toPng(node, { bgcolor: '#fff' })

      .then(function (dataUrl) {
        img = new Image();
        img.src = dataUrl;
        newImage = img.src;

        img.onload = function () {
          var pdfWidth = img.width;
          var pdfHeight = img.height;

          // FileSaver.saveAs(dataUrl, 'my-pdfimage.png'); // Save as Image

          var doc;

          if (pdfWidth > pdfHeight) {
            doc = new jsPDF('l', 'px', [pdfWidth, pdfHeight]);
          } else {
            doc = new jsPDF('p', 'px', [pdfWidth, pdfHeight]);
          }

          var width = doc.internal.pageSize.getWidth();
          var height = doc.internal.pageSize.getHeight();

          doc.addImage(newImage, 'PNG', 10, 10, width, height);
          filename = 'mypdf_' + '.pdf';
          doc.save(filename);
        };
      })
      .catch(function (error) {
        // Error Handling
      });
  }
}
