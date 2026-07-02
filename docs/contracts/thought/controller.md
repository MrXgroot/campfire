# controller

## controller architecture pattern

## what we are using

we are using to have the
Main page as composer of different components

```js
<CreatePage>
  <Header />
  <InputForm />
  <AvatarUpload />
  <BannerUpload />
</CreatePage>
```

and its a clear form of composition

**WHAT ARE THE USECASE**
there is no need to orchaestrate the main page will be completely clean

---

input form has alot to have to take
it has to work with many things like taking image and working with image and orchaestrating all that to have clearn architecture

**WHAT WAS OUR PRINCIPLE**
we wont do anything to make the component smarter we just pass the thing

---

now i have this okay my features is like this createCommunity/components and has the /Actions and Form and Header and ImageAdjuster and MediaSection now

what is the problem i having the i dont know are these components or what if they are components then according to my design principles i cant give them access to the hooks and all but if they are already smart they cant be stored inside components folder if i get them out then it will take the place of the cratecommunity folder and make it look bloated what is the solution then

---

we are talking about the controller architecture but hte architecture makes the homepage from composer to the orchaestrator that is not what we want but

if we want the Form to have the form context and image slider to have that context then do you think we need one more composing layer inside the createCommunity as index.jsx that manages everything ..?

## solution

There are three architectures suits this problem

1. Feature root
2. Presentation Model
3. State Machine

## Feature Root
