class Data {
   constructor(year, month) {
      this.year = year;
      this.month = month - 1;
      this.date = new Date(this.year, this.month, 1);
      this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      this.days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
      this.dates = [];
      this.getDates();
      this.create();
      console.log(this.dates);
   }

   getDates() {
      while(this.date.getMonth() == this.month) {
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
      tr = document.createElement('tr');
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
            if(i == 0 && this.dates[k].weekday > j + 1){
             td.innerHTML="-" 
            } 
            else if (this.dates[k]) {
               td.innerHTML = this.dates[k].date;
               k++;
            }                     
            td.style.border = '1px solid black';          
            tr.append(td);        
         }
      }
      document.body.append(calendar);   
   }
}

const may = new Data(2021, 6);


// class Data {
//    constructor(y, m) {
//       this.year = y;
//       this.month = m;
//       this.date = new Date(this.year, this.month);
//    }
//    create() {
//       // return `Year: ${this.year} \nMonth: ${this.month}`;

//    }
// }

// let date = new Data(1979, 5);
// console.log(date.date.getDay());