# TWSClone

![Home Page](app/assets/images/homepage.png)

[TWSClone](https://twsclone.herokuapp.com/) is the the highly unoriginal working name of a clone of Tea With [Strangers](https://teawithstrangers.com), a social meetup app created by Ankit Shah. A Ruby on Rails backend connects a Postgres SQL database to the React/Redux frontend. Once users create and/or sign in to an account, they will be able to specify the area in which they live and join meetups located there, which are hosted by a user and attended by a handful of other users. Users will have access to a dashboard that will display any meetups that they are joined as attendees and any meetups that they have created and will host.

--

## Features

### Frontend-to-Backend Auth

None of the features in TWSClone would function without the ability to create, sign in, and log out of a user account.

![]()

This custom process is simple but secure, requiring a unique email address and a password with certain minimum requirements. Users are clearly informed of any issues with login/signup credentials. In addition, for the purposes of this project, a demo user is available for quick and functional access from both the Sign Up and Sign In pages.

---

### View Cities

Mirroring the webapp upon which it is based, TWSClone is available in select cities.

![]()

Users can choose from one of six major cities, where they can join or create meetups with other users in the same region.

### View City

Each individual city allows the user to set it as the user's home city, giving that user the ability to join events in that city.

![]()

Users are informed when the city they are viewing is their home city.

![]()

---

### View events

The events in a given city are displayed when viewing that specific city's page.

![]()

User has the option to join the events in their home city.

--

## Features to Implement

There are several features for TWSClone still in the works, which will be completed and implemented at a future time.

### Join / Leave Event

Joining an event will alter the user's state and assign that event to it, and will also re-render the button to read "Leave Event" instead.

### Host Event

Users will be able to create events themselves, with the user being assigned as the events' host. That event will be assigned to that user's home city, and other users will be able to join that created event as attendees.

### Dashboard

Users will be able to access a personal dashboard, which will have a several features. There users will be able to view the events that they are attending, as well as the events the events that they have created and are hosting.

Users will be able to view all of the events that they have attended in the past, whether as attendee or host.

Users will be able to adit their personal account information, including email address, password, and profile picture.
