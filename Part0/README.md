# Full Stack Open 2020

## Part 0 - B: Fundamentals of Web Apps Exercises

### Exercise 0.4 Answer:

- New Note Chain of Events Diagram

<p align="center">
  <img src="https://raw.githubusercontent.com/auxfuse/fullstackopen2020/main/Part0/assets/Exercise0.4_new_note_creation_chain_of_events_diagram.png" alt="Exercise 0.4 - New note web sequence diagram">
</p>

<details>
<summary>Click to expand Web sequence diagram Modeling Code for above</summary>

```markdown
title Exercise 0.4 new note - new note creation chain of events diagram

actor User
participant browser

User -> browser: Navigate to exampleapp/notes

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fi/exampleapp/notes
activate server 
note over server:
Status 200
request succeeded
end note
server --> browser: HTML fetched & rendered
deactivate server

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fi/exampleapp/main.css
activate server 
note over server:
Status 200
request succeeded
end note
server --> browser: CSS fetched & painted to browser
deactivate server

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fs/exampleapp/main.js
activate server
note over server:
Status 200
request succeeded
end note
server --> browser: JS fetched & executed requesting JSON data
deactivate server 

browser -> server: HTTP request GET from\n https://studies.cs.helisnki.fs/exampleapp/data.json
activate server
note over server:
Status 200
request succeeded
end note
server --> browser: notes returned as JSON data only retrieving "content" header from note object
deactivate server 

note over browser:
Event handler executed
rendering notes to DOM
end note

User -> browser: New note entered & submitted

browser -> server: HTTP request POST to https://studies.cs.helsinki.fi/exampleapp/new_note
note over server:
Server accepts data from POST request in JSON format
under two headers: "content" & "date" respectively.
end note
note over server:
"content" and "date" are captured as a new 'note' object
and adds it to an array holding all 'notes' (for which
the array is called)
end note
note over server:
Status 302
redirect implemented
after POST
end note
activate server
server --> browser: URL redirect to re-render the page with the new data
deactivate server

note over browser, server:
At this stage the redirect causes the exampleapp/notes page
to reload, repeating the process above.
end note
```

</details>

### Exercise 0.5 Answer:

- User navigates to Single Page Application Chain of Events Diagram

<p align="center">
  <img src="https://raw.githubusercontent.com/auxfuse/fullstackopen2020/main/Part0/assets/Exercise0.5_User_navigate_to_Single_page_application_(SPA).png" alt="Exercise 0.5 - User navigates to Single Page Application web sequence diagram">
</p>

<details>
<summary>Click to expand Web sequence diagram Modeling Code for above</summary>

```markdown
title Exercise 0.5 - User navigate to Single page application (SPA)

actor User
participant browser

User -> browser: Navigate to exampleapp/spa

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fi/exampleapp/spa
activate server 
note over server:
Status 200
request succeeded
end note
server --> browser: HTML fetched & rendered
deactivate server

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fi/exampleapp/main.css
activate server 
note over server:
Status 200
request succeeded
end note
server --> browser: CSS fetched & painted to browser
deactivate server

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fi/exampleapp/spa.js
activate server
note over server:
Status 200
request succeeded
end note
server --> browser: JS fetched & executed requesting JSON data
deactivate server 

browser -> server: HTTP request GET from\n https://studies.cs.helisnki.fs/exampleapp/data.json
activate server
note over server:
Status 200
request succeeded
end note
server --> browser: notes returned as JSON data only retrieving "content" header from note object
deactivate server 

note over browser:
JS executed rendering
notes from JSON data
to DOM
end note
```

</details>

### Exercise 0.6 Answer:

- User creates new note to Single Page Application Chain of Events Diagram

<p align="center">
  <img src="https://raw.githubusercontent.com/auxfuse/fullstackopen2020/main/Part0/assets/Exercise0.6_User_note_submitted_to_Single_page_application_(SPA).png" alt="Exercise 0.6 - User creates new note to Single Page Application web sequence diagram">
</p>

<details>
<summary>Click to expand Web sequence diagram Modeling Code for above</summary>

```markdown
title Exercise 0.6 - User note submitted to Single page application (SPA)

actor User
participant browser

User -> browser: Navigate to exampleapp/spa

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fi/exampleapp/spa
activate server 
note over server:
Status 200
request succeeded
end note
server --> browser: HTML fetched & rendered
deactivate server

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fi/exampleapp/main.css
activate server 
note over server:
Status 200
request succeeded
end note
server --> browser: CSS fetched & painted to browser
deactivate server

browser -> server: HTTP request GET from\n https://studies.cs.helsinki.fi/exampleapp/spa.js
activate server
note over server:
Status 200
request succeeded
end note
server --> browser: JS fetched & executed requesting JSON data
deactivate server 

browser -> server: HTTP request GET from\n https://studies.cs.helisnki.fs/exampleapp/data.json
activate server
note over server:
Status 200
request succeeded
end note
server --> browser: notes returned as JSON data only retrieving "content" header from note object
deactivate server 

note over browser:
JS executed rendering
notes from JSON data
to DOM
end note

User -> browser: New note entered & submitted

note over browser:
Default form submit function
prevented in JS file to prevent
page refresh.
end note

browser -> browser: New note "content" added\n to "notes" array & rerendered\n on page before being sent to\n server
browser -> server: HTTP request POST sent\n to https://studies.cs.helsinki.fi/exampleapp/new_note_sp

note over server 
Status 201
request succeeded
resource added
end note
```

</details>