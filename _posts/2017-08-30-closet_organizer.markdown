---
layout: post
title:  "Closet Organizer"
date:   2017-08-29 22:15:58 -0400
---


For the Rails project, I was inspired by my goal to pare down my closet and created an app that manages outfits.  I like the idea of a capsule wardrobe where one might have as few as 33 items per season but I am not there yet (see [Project 333](https://bemorewithless.com/project-333/)).  The idea is to have a few high quality pieces and minimize trendy or fast fashion pieces.  Through the app a user can create clothing items and outfits to see how many outfit combinations are available.  

One challenging piece of this project was managing the many-to-many relationship between items and outfits using a join table `item_outfits`.  In order to add clothing items to an object I created an `Outfit` method `#add_item`:

```
def add_item(item_id)
	  item_outfit = self.item_outfits.build(item_id: item_id, user: self.user)
	  item_outfit.save		
end
```

This creates a record on the join table which also has a column for `user_id`.  The `#add_item` function is called in two places.  On an outfit show page, there is an "add to outfit" link next to each of the user's clothing items.  This link routes directly to the `ItemOutfitsController` `#create` action that builds an `item_outfit` record.  The `#create` action calls the `#add_item` method to set the `item_id` and `user_id` through the ActiveRecord `#build` method.  I find writing out links explicitly to controllers without helper methods confusing so this was good practice.  I definitely appreciate the link helpers and route generators.  The `#add_item` function is also called in the `OutfitsController` `#create` action if a new outfit is created from a clothing item show page through a nested route.  

For the ActiveRecord scope method I created an `Item` class method `#most_used_items` that picks out the items that were used in the most frequently outfits.  The function counts the number of `item_outfits` records for each `item_id` and a second function limits the query to `current_user`.  I thought there would be a something like a `#mode` function available but there is not.  After much googling, I found a way to break down the SQL query as 

```
scope :most_used_items_by_user, -> {
   select("*, count(item_outfits.id) AS outfits_count").
   left_joins(:item_outfits).
   group("items.id").
   order("outfits_count DESC"}
```

This was a challenging project but I enjoyed working through each feature.  I am proud of the final product and how dry the code is.  The Rails magic really shows through how minimal the controllers and views are in the end.  Completing a project from start to finish solidified the Rails foundations since many of the Rails labs were mostly completed to begin with to focus on one topic. 
