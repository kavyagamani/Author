import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { SliderComponent } from '../slider/slider.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterOutlet,NavComponent,SliderComponent,FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

about =
{
 title: "About",
 title2:"Us",
 titledescription:"The writer should be not only a visionary but a seer who can see the past in one eye, the present in another, and the future in a third.",
 description1:"Early Life and Education",
 description2:"Works of R.K. Narayan",
 description3:"Awards and Honors",
 books:[
  { id:1,title: 'The Man-Eater of Malgudi', publication: '1961, Viking' },
  { id:2,title: 'Swami and Friends', publication: '1935, Hamish Hamilton' },
  { id:3,title: 'The Painter of Signs', publication: '1977, Heinemann' },
  { id:4,title: 'The Bachelor of Arts', publication: '1937, Thomas Nelson' },
  { id:5,title: 'The Financial Expert', publication: '1952, Methuen' },
  { id:6,title: 'A Tiger for Malgudi', publication: '1983, Heinemann' },
  { id:7,title: 'The Guide', publication: '1958, Methuen' },
  { id:9,title: 'The Dark Room', publication: '1938, Eyre' },
  { id:10,title: 'Grandmother\'s Tale', publication: '1992, Indian Thought Publications' },
  { id:11,title: 'A Horse and Two Goats', publication: '1970' },
  { id:12,title: 'Malgudi Days', publication: '1942, Indian Thought Publications' },
  { id:13,title: 'The Grandmother\'s Tale and Selected Stories', publication: '1994, Viking' },
  { id:14,title: 'Lawley Road and Other Stories', publication: '1956, Indian Thought Publications' },
  { id:15,title: 'The Emerald Route', publication: '1980, Indian Thought Publications' },
  { id:16,title: 'The Mahabharata', publication: '1978, Heinemann' },
  { id:17,title: 'Next Sunday', publication: '1960, Indian Thought Publications' },
  { id:18,title: 'My Days', publication: '1973, Viking' }
]

}
// public books: { title: string, publication: string }[];

public biography: string;
public biography1: string;
public biography2: string;


  constructor() {
    this.biography = `Rasipuram Krishnaswami Iyer Narayanaswami (RK Narayan) was a well-known Indian writer famous for his set of work and writing in the fictional South Indian town of Malgudi. He was one of the leading and famous authors of early Indian literature written in English along with two others, Mulk Raj Anand and Raja Rao.

    Narayan's greatest achievement was to make India accessible to the outside world through his writing and powerful words in his literature. Narayan's biography is always centered on his friendship with Graham Greene because he was Narayan's mentor and close friend. Greene was actively involved in identifying and getting publishers for Narayan's first four books. 
    
    In 1941, Narayan founded his own publishing house, and his works quickly found a permanent and favorite place on the bookshelves of almost all Indian homes. When he was at the peak of his fame in his successful career, Narayan was then awarded a Padma Bhushan in 1964 and 36 years later, just a year before his death at 94, another prestigious Padma Vibhushan award in 2000. Narayan was critically ill and hospitalized with cardiovascular problems two weeks ago in Madras, the capital of the southern state of Tamil Nadu, where he was born in 1906.`;
   
   
   
    this.biography1 =`Narayan was born in 1906 in Madras (now renamed and known as Chennai, Tamil Nadu), British India into a normal Hindu family. He was one of eight children his parents have had and Narayan was second among the sons; his younger brother Ramachandran was an editor at Gemini Studios, and the youngest brother Laxman was a successful cartoonist. 

   Narayan spent the early years of his life in Madras in the care of his grandmother and a maternal uncle and joined his parents mainly only during the vacations. At that time, India was still treated as the most important of the British empire, a colony held since 1857.
   RK Narayan attended a number of schools than a usual student would as in Madras while living with his grandmother, in which the main school was the Lutheran Mission School in Purasawalkam, C.R.C. High School, and Christian College High School. Narayan was an ardent and passionate reader who grew up reading Dickens, Wodehouse, Arthur Conan Doyle, and Thomas Hardy.

   After completing high school, Narayan failed the university entrance examination unfortunately but got to have lots of time to spend a year at home reading and writing; and then he successfully passed the final examination in 1926 and joined Maharaja College of Mysore.
   
   RK Narayan was always found devoted and dedicated to reading whenever he got time.`;

   this.biography2 =`Among the best works of RK Narayan among his 34 novels, The English Teacher (1945), Waiting for the Mahatma (1955), The Guide (1958), The Man-Eater of Malgudi (1961), The Vendor of Sweets (1967), and A Tiger for Malgudi (1983) were the best.

   His novel The Guide (1958) won him the most prestigious National Prize of the Indian Literary Academy, which was his country's highest honor. Narayan received many other awards and honors including the AC Benson Medal from the Royal Society of Literature, the Padma Vibhushan, and the Padma Bhushan, India's second and third highest civilian awards, and in 1994 the Sahitya Akademi Fellowship, the highest honor of India's national academy of letters. He was also once nominated to the Rajya Sabha, which is the upper house of India's parliament.`;

  

  }
  
}
