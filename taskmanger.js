class Task {
    constructor(id, title, description, dueDate, priority) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.priority = priority;
    }
  }
  
  class TaskManager {
    constructor(initialTasks) {
      this.tasks = initialTasks.map(
        task => new Task(task.id, task.title, task.description, task.dueDate, task.priority)
      );
    }
  
    // Método para agregar una nueva tarea
    addTask(title, description, dueDate, priority) {
      const newId = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;
      const newTask = new Task(newId, title, description, dueDate, priority);
      this.tasks.push(newTask);
    }
  
    // Método para eliminar una tarea por id
    deleteTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    }
  
    // Método para ordenar las tareas por prioridad (menor número = mayor prioridad)
    sortTasksByPriority() {
      this.tasks.sort((a, b) => a.priority - b.priority);
    }
  
    // Mostrar las tareas
    showTasks() {
      console.log(this.tasks);
    }
  }
  
  // Datos iniciales
  const initialTasks = [
    { id: 1, title: "Completar informe", description: "Finalizar informe trimestral", dueDate: "2024-03-15", priority: 2 },
    { id: 2, title: "Reunión con cliente", description: "Presentar propuesta de proyecto", dueDate: "2024-03-10", priority: 1 },
    { id: 3, title: "Actualizar software", description: "Instalar últimas actualizaciones", dueDate: "2024-03-20", priority: 3 }
  ];
  
  
  // Crear instancia del gestor de tareas con los datos iniciales
  const taskManager = new TaskManager(initialTasks);
  
  // Agregar una nueva tarea
  taskManager.addTask("Preparar presentación", "Crear diapositivas para la presentación", "2024-03-12", 1);
  
  // Ordenar las tareas por prioridad
  taskManager.sortTasksByPriority();
  
  // Mostrar las tareas ordenadas
  taskManager.showTasks();
  
  // Eliminar una tarea
  taskManager.deleteTask(2);
  
  // Mostrar tareas después de eliminar una
  taskManager.showTasks();
  