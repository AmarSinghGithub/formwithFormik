export const schema = [
    {
      "name": "title",
      "type": "text",
      "label": "Title",
      "placeholder":"Enter title here",
      "rules": {
        "min_length": 5,
        "max_length": 80
      },
      "help": "",
      "width": 12
    },
   
    {
      "name": "read_time",
      "type": "number",
      "label": "Read Time",
      "placeholder":"Enter time",

      "rules": {
        "min": 1,
        "max": 10
      },
      "help": "",
      "width": 12
    },
    {
      "name": "category",
      "type": "select",
      "label": "Category",
      "placeholder":"Enter discription here",
      "rules": {
        "options": ["Blog", "Legal", "News", "Case Study", "Job"]
      },
      "help": "",
      "width": 8
    },
    {
      "name": "published_on",
      "type": "date",
      "label": "Date of Publish",
      "rules": {
        "before": "01/01/2010",
        "after": "today"
      },
      "help": "Published in News Paper",
      "width": 4
    },
    {
      "name": "file",
      "type": "file",
      "label": "File",
      "rules": {
        "file_types": ["pdf", "docx"]
      },
      "help": "Attach a file (PDF or DOCX)",
      "width": 8
    },
    {
      "name": "datetime",
      "type": "datetime-local",
      "label": "Date and Time",
      "rules": {
        "before": "tomorrow",
        "after": "today"
      },
      "help": "Specify date and time",
      "width": 4
    },
    {
      "name": "description",
      "type": "richtext",
      "as":"textarea",
      "rows":"4",
      "placeholder":"Enter discription here",
      "label": "Description",
      "rules": {
        "max_length": 500
      },
      "help": "",
      "width": 12
    },
]
