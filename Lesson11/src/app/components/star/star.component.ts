import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    readonly DEFAULT_STAR_WIDTH: number = 75;
    readonly TOTAL_NUM_OF_STARS: number = 5;
    @Input() rating: number = 0; // Need to assign a default value (can be a non-zero value) ow compiler errors
    cropWidth: number = this.DEFAULT_STAR_WIDTH;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    // We want the cropWidth recalculated any time the container component changes its rating number
    // so we implement this class with OnChanges interface

    // this function only watches changes to Input properties
    ngOnChanges(): void {
        this.cropWidth = this.rating * this.DEFAULT_STAR_WIDTH / this.TOTAL_NUM_OF_STARS;
        // ie. if rating is 4, the cropWidth is 4 * 75 / 5 = 60px
    }

    onClick(): void {
        this.notify.emit(`Rating ${this.rating} is clicked!`);
    }
}