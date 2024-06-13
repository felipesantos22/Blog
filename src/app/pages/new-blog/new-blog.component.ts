import { Component } from '@angular/core';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-new-blog',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './new-blog.component.html',
  styleUrl: './new-blog.component.css',
})
export class NewBlogComponent {
  buttonText = '';
}
