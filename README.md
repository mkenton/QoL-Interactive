# QoL-Interactive #

## Project Pitch ##

QoL (Quality of Life) Interactive is for beginners and experienced coders alike. We often find ourselves repeating actions, typing out long statements, and retracing our footsteps in suboptimal ways. In the back of our heads, we often think "there's probably a better way," but we continue with our stubborn habits while myopically focusing only on the code of our present projects. But of course there's a better way! Maybe *you* will have to be the one to make it, but chances are, *something* is out there, and you just need to take the moment to find it! QoL-Interactive aims to teach you shortcuts, allow you to practice them in fun ways, and foster discussion for sharing QoL improvement ideas.

QoL-Interactive is a web app comprising 3 main components:
1. Lessons on VSCode Shortcuts, CLI configs, and other productivity-increasers and time-savers
2. QoL-centered discussion board where users share their own QoL improvements (useful shortcuts, configurations, bash/zsh aliases, etc.)
3. Arcade section to put your keyboard shortcut skills to test (stretch goal)


## User Stories ##
- As a user, I want to be able to create an account so that I can log in and use the application.
- As a user, I want to be able to navigate between viewing lessons, games, and discussion.
- As a user, I want to be able to view lessons. 
- As a user, I want to be able to interact with a lesson (e.g. learn a shortcut, see my keypresses on screen, and see the corresponding action/result as it would appear in VSCode.)
- As A user, I want to be able to mark a lesson complete.
- As a user, I want to be able to track my lesson completion. (Completed lessons for my user should persist when I log out and log back in).
- As a user, I want to be able to view a discussion board where QoL topics (e.g. productivity/time-saving techniques & configs) are discussed.
- As a user, I want to be able to view discussion board topics and click into topics where threads are viewed.
- As a user, I want to be able to create a thread.
- As a user, I want to be able to post on existing threads.
- As a user, I wan to be able to see the usernames of the poster and commenter and time submitted.
- As a user, I want to be able to edit my own posts. (*stretch: formatting on posts!*)
- As a user, I want to be able to see that a post is edited, with time of edit.
- As a user, I want to be able to navigate to a page to play 'Shortcut Arcade' where I am quizzed on keyboard shortcuts am scored on my performance. *(stretch goal)*
- As a user, I want to be able to view my high scores on 'Shortcut Arcade' and view top scores across all users. *(stretch goal)*
- As an admin, I want to be able to moderate posts.
- As an admin, I want to be able to create new categories.


## Models & Relationships ##

User has many Lessons through UserLessons

Lessons has many Users through userLessons

User has many Posts

Post has one User

Post has one Category

### Users ###
- id
- user_name
- display_name
- dassword_digest

### Categories ### 
- id
- category_name

### Posts ###
- id
- title
- body (text)
- created_date
- updated_date
- user_id (foreign key)
- category_id (foreign key)
- parent_post (foreign key (?), references id of records in this Posts table) - _"null"_ if first post, references _post_id_

### Lessons ###
- id
- title
- lesson_category

### UserLessons ###
- id
- user_id (foreign key)
- lesson_id (foreign key)
- isCompleted (boolean, default false)


### Score ###
*(Stretch goal)*
- id
- user_id
- score (int)
- game_id (boolean, only necesssary - if tracking scores of multiple games)

## API Documentation ##


### Routes ###

__GET__: *"/me"*

Returns a current user details. Response JSON looks like this:
```json
{ 
  id: 6,
  username: "johnsmith"
  display_name: "CoffeeCoder95"
}
```


__GET__: *"/categories"*

Returns discussion board categories. Response JSON looks like this:
```json
{ 
  category_id: 1
  category: "CLI Configurations",
  num_posts: "20",
}
{ 
  category_id: 2
  category: "VSCode Shortuts",
  num_posts: "12",
}
{ 
  category_id: 3
  category: "Useful Extensions",
  num_posts: "15",
}
```

__GET__: *"/categories/:id"*

Returns discussion posts for specific category. Response JSON looks like this:
```json
{ 
  id: 10
  title: "Useful aliases for git workflow"
  body: "Below are some aliases I have set up in my zsh config file (~/.zshrc) which save me a lot of time! ..."
  created_date: "10/15/2021 12:45:02"
  updated_date: "10/15/2021 12:45:02"
  user_id: 9
  category_id: 1
  parent_post: null
}
{ 
  id: 2
  title: null
  body: "Thanks this is a life saver!"
  created_date: "10/15/2021 12:55:02"
  updated_date: "10/15/2021 12:55:02"
  user_id: 17
  category_id: 1
  parent_post: 10
}
```


__POST__: *"/categories/:parent_id"/new*

Returns discussion posts for specific category. Response JSON looks like this:
```json

{ 
  id: 3
  title: null
  body: "I have constructive criticism!"
  created_date: "10/15/2021 12:57:02"
  updated_date: "10/15/2021 12:57:02"
  user_id: 17
  category_id: 1
  parent_post: 10
}
```

## Wireframe ##
