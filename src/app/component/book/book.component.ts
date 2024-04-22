import { Component } from '@angular/core';
import { RouterLink,RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from '../nav/nav.component';
import { SliderComponent } from '../slider/slider.component';
import { FooterComponent } from '../footer/footer.component';



@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterOutlet,SliderComponent,FooterComponent,NavComponent],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss'
})
export class BookComponent {
  book={
    title:"Our",
    title1:"Books",
    description:"A writer’s business is to affect the reader’s imagination.",
    Innerbook:[
      {id:1, image:"../assets/images/malgudi-days.jpg", title:"Malgudi Days", name:" Read More"},
      {id:2, image:"../assets/images/themaneater.jpg", title:"The Man Eater Of Malgudi", name:" Read More"},
      {id:3, image:"../assets/images/thevendor.jpg", title:"The Vendor Of Sweets", name:" Read More"},
      {id:4, image:"../assets/images/talkative-man.png", title:"Talkative Man", name:" Read More"},
      {id:5, image:"../assets/images/the-world.jpg", title:"The World Of Nagaraj", name:" Read More"},
      {id:6, image:"../assets/images/painter-sign.jpg", title:"The Painter of Signs", name:" Read More"},
      {id:7, image:"../assets/images/the-ramayana.jpg", title:"The Ramayana", name:" Read More"},
      {id:8, image:"../assets/images/grandmother-tale.jpg", title:"The Grandmother Tale", name:" Read More"},
      {id:9, image:"../assets/images/swami-friends.jpeg", title:"The Swami and Friends", name:" Read More"},
      {id:10, image:"../assets/images/my-days.png", title:"My Days", name:" Read More"}


    ],
    Modalbook:[
      {id:11,title:"Malgudi Days",modal: "exampleModal", name:"Close",description:"Malgudi Days is a collection of short stories written by R. K. Narayan, published in 1943 by Indian Thought Publications, the publishing company Narayan himself founded in 1942. He founded the company after he was cut off from England as a result of WWII, and needed some outlet for his writing. It wasn’t just a vanity press, though, as during the war there was no other way to circulate Indian writing, and Indian readers had no access to new work. The press is still in operation, now run by Narayan’s granddaughter, Bhuvaneswari, or Minnie. Malgudi Days was first published outside of India in the 1982, by Penguin Classics."},
      {id:12,title:"The Man Eater Malgudi",modal: "exampleModal1",name:"Close",description:"Nataraj, owner of a small, friendly printing press in the enchanted city of Malgudi, has never been very successful at making enemies. Until, that is, he meets Vasu. Almost accidentally, Vasu, a pugnacious taxidermist, moves into Nataraj's attic, bringing an alarming stuffed jungle of hyenas, pythons, and tigers, and an assortment of dancing girls who clump up and down the printer's stairs. Vasu is definitely not a man to tangle with. But when, in search of bigger game, he threatens the beloved temple elephant, Nataraj rises to the occasion--and R. K. Narayan invests his story with all his warm, wicked, and delightful sense of comedy."},
      {id:13,title:"The Vendor for Sweets",modal: "exampleModal2",name:"Close",description:"In R.K. Narayan’s novel The Vendor of Sweets, the tension between old and young India is the backdrop against which a father and son clash. Jagan, a 55 year old man who is steeped in tradition, is a bundle of contradictions. He is a passionate follower of Gandhi, embracing non-violent cooperation and an ascetic lifestyle. However, he is also boastful when it comes to his own self-control. It is not enough that he has renounced sugar and salt, he is compelled to tell others about it. Furthering the irony is that Jagan works as the titular vendor of sweets."},
      {id:14,title:"Thetalkative man",modal: "exampleModal3",name:"Close",description:"The Talkative Man tells the story of a mysterious stranger who arrives at the Malgudi train station to pursue a purported U.N. project. The stranger winds up staying at Talkative Man's home, where he begins to seduce the librarian's daughter."},
      {id:15,title:"The World of Nagaraj",modal: "exampleModal4",name:"Close",description:"In The World of Nagaraj, the central character fancies himself as a man with a mission. Nagaraj does not fully understand the nature of this mission, even though he expends considerable energy pursuing it. His main purpose, he believes, is to write a biography of the mythological character Narada, who traveled through the human and heavenly worlds telling stories. No ordinary weaver of tales, Narada was a talented gossip whose revelations planted distrust and raised suspicion wherever he went.       "},
      {id:16,title:"The Painter Sign",modal:"exampleModal5",name:"Close",description:"The Painter of Signs tells the story of Raman, a sign-painter, and Daisy, who works at a Family Planning Clinic, who form a romantic relationship after Daisy hires Raman to paint a sign for the clinic."},
      {id:17,title:"The Ramayana",modal:"exampleModal6",name:"Close",description:"R. K. Narayan’s The Ramayana: A Shortened Modern Prose Version of the Indian Epic (Suggested by the Tamil Version of Kamban) was first published in 1972 by Viking Press. The epic story of Rama’s journey contains the teachings of ancient Hindu sages, and these teachings continue to have a major influence on Indian culture."},
      {id:18,title:"The Maner Eater Malgudi",modal: "exampleModal7",name:"Close",description:"The book is about Narayan's great grandmother who is forced to travel far and wide in search of her husband, as narrated to him by his grandmother."},
      {id:19,title:"The Swami and friends",modal: "exampleModal8",name:"Close",description:"Swami and Friends is the story of the tumultuous friendship of Swaminathan, his four childhood friends, and a new boy named Rajam. It takes place in British-colonial India in the year 1930. The story begins by introducing Swaminathan and his friends Somu, Sankar, Mani, and Pea."},
      {id:20,title:"My Days",modal: "exampleModala",name:"Close",description:"In his usual winning, humorous style, R. K. Narayan shares his life story, beginning in his grandmother's garden in Madras with his ferocious pet peacock. As a young boy with no interest in school, he trains grasshoppers, scouts, and generally takes part in life's excitements."},
   ]
  }

}
