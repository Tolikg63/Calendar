class Data {
   constructor(year, month) {
      this.year = year;
      this.month = month - 1;
      this.date = new Date(this.year, this.month, 1);
      this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September","October", "November", "December"];
      this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      this.dates = [];
      this.getDates();
      this.create();
      this.prev();
      this.next();
   }

   getDates() {
      while(this.date.getMonth() === this.month) {
         this.dates.push({
            date:this.date.getDate(),
            weekday:this.date.getDay()
         });
         this.date.setDate(this.date.getDate() + 1);
      }
   }

   create() {
      const calendar = document.createElement('table');
      calendar.style.borderCollapse = "collapse";
      calendar.style.textAlign = "center";
      calendar.style.fontSize = "18px";
      calendar.style.fontFamily = "Verdana";
      let k = 0;
      let th;
      let tr = document.createElement('tr');
      for (let i = 0; i < this.days.length; i++) {
         th = document.createElement('th');
         th.innerHTML = this.days[i];
         if (th.innerHTML === "Sunday" || th.innerHTML === "Saturday") {
            th.style.backgroundColor = "#FEFEDF";
         }
         th.style.border = "1px solid black";
         tr.append(th);
         calendar.append(tr);
      }
      calendar.style.width = 500 + 'px';
      calendar.style.height = 500 + 'px';
      calendar.style.border = '2px solid #000';
     
      for (let i = 0; i < Math.ceil(this.dates.length / 6); i++) {
         tr = document.createElement('tr');
         calendar.append(tr);
         for (let j = 0; j <= 6; j++) {
            let td = document.createElement('td');
            if (i === 0 && this.dates[k].weekday > j + 1) {
               td.innerHTML = "-";
            }
            else if (this.dates[k]) {
               td.innerHTML = this.dates[k].date;
               k++;
            }
            td.style.border = '1px solid black';
            tr.append(td);        
         }
      }
      document.body.innerHTML = "";
      document.body.append(calendar);
      
      const prevBtn = document.createElement('button');
      const nextBtn = document.createElement('button');
      prevBtn.textContent = "Prev";
      nextBtn.textContent = "Next";
      document.body.append(prevBtn, nextBtn);
      prevBtn.addEventListener('click', this.prev);
      nextBtn.addEventListener('click', this.next);
   }
   prev = () => {
      this.month--
      this.date = new Date(this.year, this.month, 1);
      this.dates = []
      this.getDates()
      this.create()

      if (this.months == 0) {
         this.month = 12;
         this.year--
      }
   }
   next = () => {
		this.month++
		this.date = new Date(this.year,this.month, 1)
		this.dates = []
		this.getDates()
		this.create()
		if (this.months == 11) {
			this.month = -1
			this.year++;
		}
	}
      
}

const may = new Data(2021, 5);


// const now = new Date().toLocaleDateString();
// console.log(now);



// let date = new Date();

// console.log(date.getMilliseconds()); //? միլիվայրկյաններ
// console.log(date.getSeconds()); //? վայրկյաններ
// console.log(date.getMinutes()); //? րոպեներ
// console.log(date.getHours()); //? ժամեր
// console.log(date.getDate()); //? օրեր
// console.log(date.getMonth()); //? ամիսներ
// console.log(date.getFullYear()); //? տարին

// const days = ['Երկուշաբթի', 'Երեքշաբթի', 'Չորեքշաբթի', 'Հինգշաբթի', 'Ուրբաթ', 'Շաբաթ', 'Կիրակի'];
// let day = date.getDay();

// console.log(days[day - 1]); 

// let date = new Date(2025, 8, 5);
// let day = date.getDay();
// let days = ['Երկուշաբթի', 'Երեքշաբթի', 'Չորեքշաբթի', 'Հինգշաբթի', 'Ուրբաթ', 'Շաբաթ', 'Կիրակի'];
// console.log((days[day - 1])); //? Ուրբաթ

// let date = new Date(2014, 10, 8);
// console.log(date.getTime()); //? 1415390400000

// let now = new Date();
// let date = new Date(2015, 12, 4, 23, 59, 59);
// let diff = now.getTime() - date.getTime();
// console.log(diff);
