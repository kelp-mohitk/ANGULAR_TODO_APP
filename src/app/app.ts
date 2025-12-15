import { Component, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // Corrected typo
})
export class App {
  task = "";

  taskList: { id: number; Task: string }[] = [];

  addTask() {
    if (this.task.trim()) {
      this.taskList.push({ id: this.taskList.length + 1, Task: this.task });
      console.log(this.taskList);
      this.task = ""; // Clear the input field
    } else {
      console.warn("Task cannot be empty");
    }
  }


  deleteTask(id: number) {
    this.taskList = this.taskList.filter(task => task.id !== id);
  }



  //directives
  students = ['Ankit', 'Rohit', 'Sumit', 'Sahil', 'Vikram', 'Aman', 'Rajesh'];
}