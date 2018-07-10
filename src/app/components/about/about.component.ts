import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel finibus arcu, nec venenatis urna. Fusce ultrices leo luctus sem iaculis, non iaculis nisi hendrerit. Nunc finibus arcu ut convallis aliquet. Integer posuere mi sit amet ornare condimentum. Proin egestas, lectus non aliquam sollicitudin, metus odio consequat eros, id rutrum enim libero eu quam. Sed fringilla interdum nulla, non hendrerit nisi cursus vitae. Phasellus tincidunt nunc et nisl ultrices posuere. Etiam augue est, maximus ac nibh vitae, efficitur luctus risus. Morbi faucibus est leo, in viverra elit tristique a. Nam a orci erat. Fusce malesuada sit amet lorem aliquam fermentum. Fusce tincidunt, nunc vel vulputate condimentum, magna augue cursus nisi, et tristique augue ipsum id augue. Sed pulvinar dapibus est. In eu sapien vel nulla laoreet aliquet. Donec in eros mollis, maximus nisi eget, ullamcorper mauris.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien ligula, mattis vitae urna ac, dictum auctor magna. Fusce sed tortor blandit, hendrerit est sit amet, tristique elit. Nam et sagittis felis. Cras dictum risus est, quis varius orci blandit interdum. Ut ut tristique mi, id elementum dui. Curabitur ac sapien fermentum augue aliquet aliquam sed vel urna. Phasellus tempor purus vitae dapibus commodo. Donec fringilla metus ante, vel hendrerit lorem lacinia vel. Vestibulum in varius sapien. Cras iaculis lacus dolor, nec tincidunt nisi tempor venenatis. Nulla quis tellus eget nisl ultrices molestie et vitae tellus. Ut in elit faucibus, commodo quam quis, tincidunt justo. Donec luctus molestie odio, eget consectetur ex lobortis id. Suspendisse potenti. Vivamus et euismod nibh.
  
  Nullam eu ullamcorper turpis. Fusce ullamcorper eros sit amet enim luctus maximus. Nam nec velit id orci volutpat viverra. Maecenas bibendum, nibh vulputate molestie facilisis, velit nisi sagittis nibh, eu auctor mi lorem eu libero. Donec elementum cursus ante, id bibendum purus egestas a. Nulla eu quam mollis, tincidunt mauris eget, suscipit nibh. Mauris suscipit nibh nulla, vitae tempus nulla venenatis vitae. Etiam vitae finibus quam. Cras eget gravida nisi. In aliquam orci nisl, non consectetur ligula tempor non. Sed semper est quam, at bibendum urna dapibus vel. Ut sed justo sed orci blandit malesuada ullamcorper sit amet tellus. Suspendisse lorem dui, dignissim elementum lacinia eget, semper eu elit. `;

  myText = this.loremIpsum.split('\n');
  constructor() { }

  ngOnInit() {
  }

}
