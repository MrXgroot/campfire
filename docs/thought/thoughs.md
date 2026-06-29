# what i learnt

## ownerships

the ui and business logic should not have to be together
Ex: HomePage own the ui or <CampFeedToolBar/> that sounds like it is from the "Camp Features",
but NO its just the UI the business logic is always owned "features/camps"

## how to know who owns what

if something uses the api of any feature then it entirely belongs to that module
Ex: camp page can be using Comments ui if it has show the comment it cannot
Doubt: What happens when i use Comment inside the <CampPage/> Camp page uses the comment to show the camps discussion and so the comment is not feature according to that lets figure it out what is that

CampPage->CommentCard->Replies

CampPage can access the data those are campInfo and the api call would be api/community/:communitySlug/camps/":campSlug/
so the camp page owns the i cant make the comment to have all the knowledge because it not that good so comment tree i can do the commentList

## final verdict

<CommentList/> can be owned by comments it can be passed the <CommentList slug={slug}/>

inside the comment list it maps out the data to the Dumb comment card now i can own the comment create and all

## Ownership decendency

pass down listing if it maps down to its own features it it maps its not yours to keep
if it only takes one slug one id one params to get the data large enough to have its own place in features its not yours

Ex: campPage own info campsInfo create Reply create Comments and all now we need to knwo who owns what amount of reponsiblity to carry forward
