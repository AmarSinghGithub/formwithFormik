export const schema = [
    {
      "name": "title",
      "type": "text",
      "label": "Title",
      "rules": {
        "min_length": 5,
        "max_length": 80
      },
      "help": "",
      "width": 6
    },
   
    {
      "name": "read_time",
      "type": "number",
      "label": "Read Time",
      "rules": {
        "min": 1,
        "max": 10
      },
      "help": "",
      "width": 6
    },
    {
      "name": "category",
      "type": "select",
      "label": "Category",
      "rules": {
        "options": ["Blog", "Legal", "News", "Case Study", "Job"]
      },
      "help": "",
      "width": 6
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
      "width": 6
    },
    {
      "name": "file",
      "type": "file",
      "label": "File",
      "rules": {
        "file_types": ["pdf", "docx"]
      },
      "help": "Attach a file (PDF or DOCX)",
      "width": 6
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
      "width": 6
    },
    {
      "name": "description",
      "type": "richtext",
      "as":"textarea",
      "rows":"4",
      "label": "Description",
      "rules": {
        "max_length": 500
      },
      "help": "",
      "width": 12
    },
]
