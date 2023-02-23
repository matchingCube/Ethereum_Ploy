# Polycertify Developer Docs

## Synopsis of Polycertify

Polycertify is a Web3.0 version digital credential network. Users can create badge collection for **four** different major use cases/categories (`licenses and certification`, `honors and awards`, `event participations`, `volunteering and contributions`) and let other users (achievers) to claim it. All badges are actually ERC721 tokens and when a user claim a badge, he/she is actually minting the ERC721 token (NFT). Everyone has their own profile in Polycertify which can clearly see what badge the user had collected (claimed) and what badge collection the user had created. 

## The profile page

#### Result:

Everytime a new user first connect his/her wallet to Polycertify, user need to complete the first time profile setup (the **"Getting Started: Profile Setup"**) before proceeding for anything activity on Polycertify. After user completed the profile, he/she can view the profile at `view profile` and edit the profile at `edit profile`. User's profile will display their personal info, as well as the listing of the badge collection they collected and they created.

#### Figma UI to refer:

* The first time profile setup: `getting-started-profile-setup`
* The edit profile page: `edit-profile` 
* The user profile's badge collected tab: `profile-collectedSection`
* The user profile's badge collection created tab: `profile-createdSection`
* If the user has no badge collection for listing: `empty-profile`


## The explore page

#### Result:

The explore page is where all the badge collections created on Polycertify will be listed here. Everytime a new badge collection is deploy via Polycertify, the listing will be updated. Initially, the cards in display will be 12 in total (3 row, each row 4 cards), and user can click the `load more` button to load another 12 cards to extend the listing. User can search for the name of their badge collection and further choose the category they wanted to look for (four categories: all categories, licenses and certifications, honors and awards, event participations, volunteering and contributions). User can also sort the listing in two way: `Ascending Creation Date` (the oldest created badge collection until the recent one) and `Descending Creation Date` (the recent created badge collection until the oldest one). All the cards in the listing can be clicked, these cards will able to link to their respective badge collection page.

#### Figma UI to refer:

* Explore page: `explore-page` 
* When the search result is not found: `no-related-search-result`

## The badge collection page

Each badge collection will have their own page, which consist of basic info of the badge collection, a badge minting (claim) button, and tabs.  

<hr>

#### Basic info of badge collection:
1) The name of the badge collection (Eg. Microsoft Word Advanced)

2) Issuer or creator of this badge collection (Eg. Microsoft). User can click the name of the issuer or creator and view their Polycertify's profile.
3) Polygon icon. This will link to the token (badge collection) page in **Polygon Scan**.
4) The globe icon. This will link to the `external URL` given by the issuer during the badge collection creation.
5) Description of the badge collection
6) Total token supply of the badge (Display the number of total token supply. If larger than 1000, please format the number with the unit **K**. If this badge collection has unlimited supply, please replace the number with the **infinity** icon).
7) Number of achievers (Display the number of token which had been claimed (mint) by user).
8) If the badge collection has a collection drop time set, a small box will be displaying the date, time and timezone (Eg. Collection drop on 10 July 2022, 12:00pm (UTC+8)). If the badge collection will be open to minting once deployed, then this box will no appear.
9) If the badge collection has unlockable content, a small box will be displaying "Each badge includes unlockable content". This box is unclickable. However, if the user has claimed the badge into his wallet and visit this page, the small box will be displaying "Click to read the badge’s unlockable content." and now user can click this box and a popup with the unlockable content will show up. 
10) If the badge collection is a soulbound badge (soulbound token: not transferable), a small box will be displaying "Soulbound badge". This box is unclickable.

#### Figma UI to refer:
* Badge page: `badge-page`
* Badge collection with unlimited token supply: `unlimited-supply-badge-page`
* Badge collection with drop time: `droppingSoon-badge-page`
* Badge collection with unlockable content: `badge-with-unlockable-content`
* When user have the badge and can click the unlockable content box to read: `badge-with-unlockable-content2`
* Unlockable content popup: `unlockable-content-popup`
* Badge collection which is soulbound: `soulbound-badge`

<hr>

#### Badge minting button:

The badge minting button has a few states:
* When the badge is not yet claimed by an eligible user (achiever), the button will display "claim" and it is clickable. When the eligible user click the button, it will start the minting processes.

* When the badge is not eligible for a user to claim (user address not in the whitelist), below the button will display "You are not eligible to claim". The "claim" button will disabled (turns grey) and not clickable by the user.

* When the badge collection has not drop yet, the button will display "dropping soon" and in a disabled mode (not clickable)

* When the badge is claimed by the user, the button will display "claimed" and unclickable (as all collection is limited to one badge minting). The token ID of the user's claimed badge will be display below the button. The token id is a link to that token ID page on **Polygon Scan**

* When a badge collection is all claimed. The button will display "all claimed" and it is unclickable. 
  * **Note**: If the collection is fully claimed, and the user also had claimed the collection, the button will display "claimed" and the token ID in priority. Only user which do not claim this badge will see this button state if the collection is fully claimed.

#### Figma UI to refer:
* Eligible to claim: `badge-page`
* Not-eligible to claim: `not-eligible-to-claim`
* Dropping soon: `droppingSoon-badge-page`
* Claimed: `user-claimed-badge-page`
* Collection fully claimed: `finishClaiming-badge-page`

<hr>

#### Tabs:

We have three different tabs: `Achievers`, `Details` and `Rarity` (only for badge collection with multiple design)

1) `Achievers` tab will display all the users who claimed the badge, the user's div card is clickable and will link to their own profile. We can also search an achiever (user) by searching their name or address. The initial listing is 20 achievers (4 row, 5 achievers per row), user can click "load more" to load another 20 cards. If there is no achievers, display the "lonely tree" illustration.

2) Different category of badge collection will have different info in the `Details` tab (all the info are unclickable):
   
   * **Licenses & Certification** : associated with, skills, earning criteria, categories, levels, issue date and expiration date (If badge has no expiration, display "This license or certification does not expire". If badge has expiry date, then display date. If badge has expiry period, display period).
   
   * **Honors & Awards** : associated with, earning criteria, categories, levels, issue date
   
   * **Event Participations** :  associated with, earning criteria, categories, event date
   
   * **Volunteering & Contributions**: organisation, earning criteria, cause (a list of causes is stored in this github repo, `cause` folder), issue date
   
 3) Rarity tab will only appear when the badge collection has multiple design. This tab will list all the designs in cards: badge design, the badge count, and the rarity percentage.
 
#### Figma UI to refer:
* Achievers tab: `badge-page`
* Details tab: `badge-page2`
* Rarity tab: `multiple-design-rarity-tab`

## Badge Collection Creation

#### ⭐ Step 1 

Figma UI to refer: `create-page1`

* **Category** : The first step of creating a badge collection is to choose the category or tyoe of this badge collection, as this will affect form's fields of step 2. We have four type of badge collection category to choose from: 
  * Licenses and Certifications
  * Honors and Awards
  * Event Participations
  * Volunteering and Contributions

* **Name** : This will be the title of the badge collection
* **Description** : This will be the description of the badge collection
* **External Links** : User can enter the url link related to their badge collection. This is an optional field, hence, if the user didnt drop any url here, their badge collection page will not have the "globe" icon.
* **Unlockable Content** : If user toggle on and enter some text content, this will be stored locally on our server (not on chain). Only achievers of this badge collection will be able to unlock and read this content.

#### ⭐ Step 2 (info here will be the attribute of bagde's metadata)

Figma UI to refer: `create-page2-licensesAndCertifications`, `create-page2-honorsAndAwards`, `create-page2-eventParticipation`, `create-page2-volunteeringAndContributions`

**NOTE NOTE NOTE**: the type (category) of badge collection the user choose to create  on step 1 will determine which form to **show** in step 2 (as different type of badge collection will have different type of details). In step 2, all the info here will be the attributes of the badge collection's **metadata**. Please take note of this.
* If user choose licenses and certification in step 1: `create-page2-licensesAndCertifications`
* If user choose honors and awards in step 1: `create-page2-honorsAndAwards`
* If user choose events participations in step 1: `create-page2-eventParticipation`
* If user choose volunteering and contributions in step 1: `create-page2-volunteeringAndContributions`

##### Type of fields in step 2:

* **Association**: User can type the association of this badge collection. Which means what is the badge collection associated with.

* **Organisation**: For volunteering and contributions, we will use organisation instead of "association". Which means what organisation is related to the volunterring an contributions work.

* **Skills**: User can type as many skills they want in this field, and also can remove by clicking the "cross".

* **Earning Criteria**: Initially, there is one field and a "plus icon" button beside the field. If user want to enter more than one earning criteria of this badge, he/she can add one more field. User can also remove the added field by clicking the "delete icon" button. However, user can't delete the first field.
* **Categories**: This categories is not same as step 1. In step 2, this category is the category which can be defined by the user. For example, in step 1, user wants to create a badge collection which the category is licenses and certifications. While in step 2, user can give his licenses and certification badge collection a category of its own, for example, technology and blockchain. Hence, user can add as many as he wants and also remove by clicking the "cross".
* **Levels**: User can give this badge collection a level, for example, advanced level.
* **Causes**: User can select **one** of the cause related to the volunteering and contributions bagde collection. The list of causes is in this github repo, in the `causes` folder.
* **Issue date**: User can state a date for the issue date of this badge collection. Please note that, issue date is different with drop date in step 3. Drop date is the date where the achievers can start minting, while issue date is just a date to indicate when this badge collection being founded or issued. Hence it can be long time ago, in the future, or even choose the drop date as the issue date.
* **Event date**: Same as issue date, but this is for "event participations" category.
* **Expiration date**: For licenses and certifications, they will have expiration sometimes. User can choose only one, either to specify a date as the expiry date, a period (days, months, years) as the expiry period, or choose to have no expiration.

#### ⭐ Step 3

Figma UI to refer: `create-page3`

* **Token Symbol**: User can give their badge (token) collection a token symbol (the input will be all uppercase, even user input lowercase token symbol)

* **Drop time**: User can choose a drop time (to open for minting). Either user choose a date and time (as well as timezone), or allow minting immediately after the collection is created and deployed.

* **Whitelist**: User first need to download our boilerplate whitelist.xlsx and enter all the whitelist address in the xlsx file. Then, user need to upload back their xlsx file. The address in this file will only be allowed to mint the badge, hence, we need to check through the bagde collection's whitelist when an achiever wanted to mint the badge. If the achiever address is in the whitelist, he can mint it. However, user can also open the minting to everyone (no whitelist), hence, it will be a first come first mint scenario (until the collection is fully minted).

* **Soulbound Badge**: It is common sense that some badge collection should not be transferable, such as licenses and certification or some scenario. Hence, user can choose to enable soulbound badge feature to their badge collection. If the badge is soulbound, the token is **NOT TRANSFERABLE** once minted.

#### ⭐ Step 4

Step 4 will be mainly focus on token supply and badge design (single design or multiple design). Please note that, as with multiple badge design need to allocate the badge count of each design, it is impossible for unlimited supply badge collection to have multiple badge design (common sense, right?), hence **if the token is set to be unlimited supply, it can only be single badge design**. In conclusion, we can know that, there is only three combinations of badge collection:

1) Limited token supply, with single design
2) Limited token supply, with multiple design
3) Unlimited token supply, with single design

Figma UI to refer: `create-page4`, `create-page4-multipleDesign`, `if unlimited supply is ticked (create-page4)`

* **Badge (Token) Supply** : The number of badges in this collection (token supply). User can only either choose to input a number or check the unlimited supply tickbox. If the unlimited supply box is checked, the number input field will be disabled.

* **Badge Design**: User can choose single design or multiple design. If the user had tick unlimited supply, the "multiple design" selection box will be in disabled mode (refer to Figma UI: `if unlimited supply is ticked (create-page4)`).

  * If choose single design: User will need only need to upload one badge design, and the badge design preview will show in the upload box.
  
  * If choose multiple design: User can keep repeating to upload badge design, and the uploaded badge design will be added to the badge rarity list below (next step) and able to preview it.

* **Badge Rarity**: Multiple badge designs being uploaded will be display here. Here, we can allocate rarity for each badge design by using badge count (which means how much badge will be this specific design in the entire badge collection).

  * In the top right corner, there is the badge supply. This is the number that the user input in the first field and will display here.
  
  * Design variations column: here are all the badge designs uploaded by the user, and it can be remove by clicking the "delete" icon.
  * The rarity percentage column: we will calculate the percentage of this specific design in the entire badge collection. For example, badge design A has 10 badge count, and the total badge supply is 100. Hence, 10/100 * 100% = 10%. This means, badge design A will be 10% of the entire collection. Or in other word, badge design A is a 10% rare design in the collection.
  * Badge count: This is the only part of the table where user can modify. User can allocate badge count for each design and the rarity percentage will keep changing according to the badge count allocation. Please note that, the total of all badge count must be equal to the badge supply (common sense, right), if not, user can proceed to the next step.
  * Badge count left: The badge count left will tell the user how much more badge count they can allocate. Hence, this number will keep updating when the user is allocating the badge count. For example, if the badge count left: 100, it means user can allocate 100 badge count more for the rest of the badge design. Once the badge count left is 0, it means the total badge count is equal to the badge supply, and user can't allocate badge count anymore. 

#### ⭐ Step 5

After collecting the attributes of the badge collection in step 2, and have the badge design uploads in step 4, we can now generate two folder for the user to upload to a IPFS storage tools (Pinata, Web3.Storage, Nft.Storage): **badge design (image) folder** and **metadata folder**.

Figma UI to refer: `create-page5`,`create-page5-generating`

* **Generate badge**: When user click this, we will pack their badge design uploads into a folder and auto start a download of this folder to their local computer. This folder will later need to upload to the IPFS storage tool. The folder name will be "badge".

* **Generate metadata**: When user click this, we will pack their badges' metadata into a folder and auto start a download of this folder to their local computer. This folder will later need to upload to the IPFS storage tool. The folder name will be "metadata".

**Note**: Either single badge design or multiple badge design, we will pack them in a folder and let the user to upload to IPFS storage tool. So for **single badge design**, "badge" folder will contain one badge image and "metadata" folder will contain one metadata file for that single badge image. While for **multiple badge design**, "badge" folder will contain multiple badge images and "metadata" folder will contain multiple metadata files for each badge designs uploaded.

#### ⭐ Step 6

In this step, we will be managing all the CIDs for: bagde image, metadata, and pre-claiming (pre-reveal) image.

Figma UI to refer: `create-page6`

* **Choose an IPFS storage tool**: There are three tools for user to choose, which is Pinata, Web3.Storage and Nft.Storage. When user click these div cards, they will be direct to the official website of these tools. Hence, these are not selection cards, but are buttons which link to the storage tool's website.

* **Badge folder CID**: After user upload the badge folder and get the CID of the folder, user will paste the CID in this field.

* **Metadata folder CID**: After user upload the metadata folder and get the CID of the folder, user will paste the CID in this field.

* **Pre-claiming thumbnail CID**: This is actually the pre-reveal image for the badge collection. If user enable this, the image of the CID enter by the user will be the pre-reveal image of the badge collection. User can choose a reveal date, time and timezone to show the real badge design (reveal time can be before drop time or after drop time). Moreover, user can also let the drop time to be the reveal time, which means when the collection drop and open to mint, the badge design will be revealed.


#### ⭐ Step 7

In this step, we will generate our contract which will be deployed in the next step.


Figma UI to refer: `create-page7`, `create-page7-generating`, `create-page7-readyToDownload`

* **Generate contract**: When user click the "click here to generate" button, the load bar will start to run and generate the smart contract in backend (Refer to Figma UI: `create-page7-generating`). Once the smart contract is ready, user will able to download the smart contract smart code and ABI, just for their own reading and checking purpose (Refer to Figma UI: `create-page7-readyToDownload`). If user go back to previous steps and change something, they can come back to this step, and click the "regenerate" button (Once user genarate before, the "click here to generate" will changed into "regenerate"). 

**Note**: User can only proceed to last step after finish generating the smart contract. If no smart contract is generated and store temporary for deploy, user can't proceed to last deployment step.

#### ⭐ Step 8

Once the user check the "understand" box, he/she can click the deployment button to start the contract deploying process.

Figma UI to refer: `create-page8`

## Collection Whitelist

If the badge collection is a whitelist minting (claiming), they will have a whitelist store in our local database. Everytime a user want to claim the badge collection, we will run through the whitelist and check his wallet address. If the user's wallet address is in the whitelist, he will be able to continue minting. If not, no.

Hence, it is common sense that a badge collection can update their whitelist after their deployment. For example, John is eligible to claim a badge after one month of this badge collection is deployed. The issuer of this badge collection will update the whitelist by adding in the wallet address of John in the whitelist.

The collection whitelist page can be accessed through the dropdown of the top right "connect wallet" button (refer to Figma UI: `dropdown menu when we click top right connect button`).

**ONLY** the badge collections with whitelist minting will be listed here (can be sorted in descending creation date and ascending creation date). User can download the current whitelist of that badge collection, or upload a new whitelist for that badge collection. Hit save and the whitelist of the badge collection will be update in our database.

Of course, here, user can also download our whitelist.xlsx boilerplate.

Figma UI to refer: `collection-whitelist`, `empty-collection-whitelist`

