# frank-nextjs-base
This is a base project for creating fully dynamic websites using data from Frank.

The idea is that pages contains of sections, and each section contains the required data for the website to render the section.

Pages are found by using the slug setting in Frank. For example the sample about page have the slug set to `about` and is therefor found at the address `/about`. 

This project also have support for multi languages sites, to enable multi language on your site, see section below.

To expand your project and add sections that suites your need, see section about adding sections.



## Get started
Get started by cloning this repo and then run `npm install`.
To run your project, do as with any other NextJS application `npm run dev`



## Prepare Frank
Prepare your Frank installation to be used as the data source for your new NextJS website by following these steps:

1. Create a new Space
2. Setup an API Key to restore the base setup. Create your API Key by going to your space settings and navigating to API keys. Create a new key using the "Administrator / Developer" role.
3. Copy your API Key and keep it for later
4. Copy your SpaceId (found under General Settings) and keep it for later
5. Install the [frank-dump tool](https://www.npmjs.com/package/frank-dump)
6. In the root of your project, run `frank-dump restore --host <frank-host> --spaceId <spaceid> --apiKey <apikey> --path ./dump`


## Configure your project
To make your NextJS app talk to your Frank space you just configured, edit the `.env` file and set the `FRANK_SPACEID` and `FRANK_BASEURL`




## Preparing release
When deploying your NextJS app and running it in production mode, NextJS will automatically cache Frank data. This will cause data changes to not update on your site. 
To make NextJS refetch your data when data is updated, you can setup a Webook in Frank that forces your NextJS app to refetch data.

Create a Webhook by going to Settings > Webhook and create a webhook for the `Publish` and `Content.Update` events that points to `https://<your-website-url>/revalidate`

Finally, don't forget to set the ENV-variables in your production environment.



## Enable multi language support
To add multi language support to your site a small set of tasks is requred. 

### Set DEFAULT_LANGUAGE
First the ENV-variable DEFAULT_LANGUAGE must be set to a language code. In development you can do this by editing the `.env` file and uncomment the DEFAULT_LANGUAGE property.

### Enable routes
1. Rename the folder `app/__[language]` to `app/[language]`
2. Delete the folder `app/[slug]`  or rename it to `app/__[slug]`



## Adding a new language
Adding new languages is done the normal way in Frank just adding the language to the content and translating it. However there are a few things to keep in mind. 

1. When adding the new language to the `Main menu` please make sure that the slug on the new language is set to `main-main`.

2. When adding the new language to the `Startpage` please make sure that the slug on the new language is set to `startpage`



## Adding sections
Sections is the base element in your site. Pages contains of a list of sections. Out of the box this project hsave support for two sections (oneColumnSection and twoColumnSection). 

These sections is first setup as Content Types in Frank and then parsed by the website and rendered.

To add a new section type follow these steps:

1. Create the new Content Type in Frank. For this example let's call the Content Type `Our Section` and just add the text field `Title`
2. Then open the `Page` Content Type in Frank and edit the field `Sections` and enable our new `Our Section` content type an as allowed Section.
3. Create a new section renderer component in `src/sections` and call it `OurSection` and make it look something like:
````
import {  FrankContentItem } from "frank-react-sdk"

interface DataFormat {
    title: string
}

export function OurSection({ item }: { item: FrankContentItem }) {
    const data = item.data as DataFormat
    return (
        <div>
            {data.title}
        </div>
    )
}

````
4. Finally, edit `src/components/SectionContent.tsx` and make sure that our section is rendered by modifying the file to look something like:
````
export function SectionContent({ section, language }: { section: FrankContentItem, language? : Franklanguage }) {
    switch (section.contentTypeId) {
        case "oneColumnSection":
            return <OneColumnSection item={section}></OneColumnSection>
        case "twoColumnSection":
            return <TwoColumnSection item={section}></TwoColumnSection>
        case "ourSection":
            return <OurSection item={section}></OurSection>            
    }
    return <div>Section not found {section.contentTypeId} </div>
}

````
5. Now you can add the new section to any page and it will render.


## What if I want a specific page to look / work in a unique way?
You can always add specific routes just as normal NextJS pages. Let's say you want `/time` to just output the current time on the page and not use any sections or anything. 

Simply create the file `src/app/time/page.tsx` with the following content:
````
export default async function Time() {
    const time = new Date();
    return <div>{time}</div>
}
````



## How to create a new page?
Easiest way to create a new page that should be visible in the main menu is to open the "Main menu" document, and under "Pages" add a new Page and just enter all the data that way.

