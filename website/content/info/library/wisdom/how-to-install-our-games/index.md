---
title: "How to Install Our Games"
---

Most of this webshop contains physical products to print, but we also offer an increasing catalogue of digital products. 

**Physical products** require less explanation as all you need to do is print them and then use them however you want. We've written a short article with [Printing & Usage Tips](https://thewaywardmelody.com/info/library/wisdom/printing-tips/) in case you've bought a physical product, which should be all you need.

**Digital products**, however, offer different problems. Everyone has a different device, different operating system, different screen, different _version_, and so forth. This article explains, in as much detail as possible, **how to install and use our video games**. 

We work hard to make our games accessible and take as much work as possible out of your hands. For example, we ensure our games run on any screen size or resolution, you should never have to troubleshoot that. As such, the only thing that really matters is **your operating system**! 

When you download one of our digital products, you always get **several folders** named after different operating systems. (Example: `windows`, `mac`, `android`.) Within each folder is a different file---a different version of our game---because it's simply impossible to have one file work for all of them.

Below we explain **how to use the digital product on each individual operating system**, including alternatives, tips, and mistakes we've noticed in practice.

## Windows

This folder contains two files,

* A file ending in `.exe` (which also shows the game logo)
* A file ending in `.pck` (which should just show a blank file icon)

To play, you merely have to **double-click the `.exe` file**!

The home screen always has settings to change, such as one to make the game _fullscreen_.

## Mac (iMac)

This folder contains a single `.app` file. **Double-click** it to start the game.

{{% remark %}}
On older games of ours, it's a `.zip` file that you first need to "unpack". Do so by double-clicking it.
{{% /remark %}}

Most likely, Mac will block this and ask you if you "trust" the developer. This is a default security check. By default, your Mac only trusts things that come _directly from Apple and its App Store_, and nothing else. We hope our large online store that's been running for years is enough proof that you _can_ trust our game files. 

You should be able to say that you trust the application and want to run it anyway. You should only need to do this _once_, the first time you try, and it will run from then on.

If not, you should be able to go to **Settings**, then **Privacy & Security**, and see a little message about how your computer blocked this game from running. Click the "Open" button next to it.

## Linux

This folder contains two files,

* A file ending in `.x86_64` (which also shows the game logo)
* A file ending in `.pck` (which should just show a blank file icon/nothing)

To play, **double-click the `.x86_64` file**!

Sometimes this file is not "executable" yet, depending on the version of Linux and its settings. If so, you can make it executable yourself.

* Open a **Terminal Window** (or "Command Prompt")
* Type `chmod +x path/to/file.x84_64`
* (Instead of typing that path yourself, you can also drag the file into it. The terminal should add the _path_ to the file itself.)
* Press Enter to run it this command.

## Web

This folder contains a handful of files. Don't worry, you don't need to understand any of them.

This is not an _operating system_, of course. It is a version of the game that you can **play in any browser**, which means it should work on _all_ operating systems! 

{{% example %}}
For example, you can use this method to play on Chromebooks. As long as a device has a browser, you can visit the web game and play it there.
{{% /example %}}

We don't make this the default, however, because it **requires some steps** to make it work. 

For security reasons, browsers do not allow you to run a web game just by double-clicking a file. This is good! Otherwise it would be very easy to hack your computer whenever you visit any website. Websites simply _can't_ access anything on your local computer drive, unless you upload those files yourself.

As such, to run the Web version of our games, it needs to be **"hosted"**. Below are some possible methods to acquire a "host" (or "server").

* Use the **school server**. Most schools have their own website, which means they have a server. Talk to your admin or IT staff about the possibilities of hosting educational games on it.
* Create a **(free) website**. There are many providers who will give you a server for free, as long as you stay within reasonable usage.
* Use **software** like XAMPP to host it on your own computer. This means you can play on your own PC, through the browser, but not anywhere else. We will explain this method in detail below.
* (We're looking at hosting these games ourselves in a way that anyone who bought them can access. We don't make any promises about this yet, though. Even if we did host them, we would keep giving you the actual files to use as you wish.)

However you acquired your host, you can now play the game by,

* **Placing the Web folder onto the server**. Either upload it, drag-and-drop, or copy-paste the file to where XAMPP is hosting.
* Then **visiting the right address** in the browser. 

For example, say your school's website is `amazingschool.edu`. You create a folder on the server called `educational-game` and copy-paste all files from Web into it. Now anyone should be able to visit `amazingschool.edu/educational-game/index.html` and play the game! In most cases, that final bit after the slash isn't even necessary.

### Using XAMPP

This method does not require any accounts or outside connections. You simply host the game on your own device. This is safest and most self-contained, which is why we explain this method in detail.

* Go to [XAMPP Installer](https://www.apachefriends.org/download.html). Download the one for your operating system, double-click to install.
* While installing, it allows you to pick a location. Pick a good one, with a good name, and remember where it is on your PC. Let's say you put it at `C:\johndoe\my-own-host\`
* Once done, you can run the XAMPP app. It shows a list of several services, but we only care about the first one: `Apache`.
* Click `Start` behind Apache, wait a few seconds, and it should be hosting. (Don't forget to `Stop` it when not needed anymore.)

You can check out this [WikiHow Article](https://www.wikihow.com/Set-up-a-Personal-Web-Server-with-XAMPP) for more detail and images.

You can put as many of our educational video games as you want inside `C:\johndoe\my-own-host\`. Just copy the entire `Web` folder of a game into there. 

As long as XAMPP is running, you should be able to access any of them through the browser!

In the previous section, we explained how to access web games hosted on an online server (such as `amazingschool.edu`). You probably already know you can access websites by typing their address. So, you might wonder, how do you access a website on your own PC? One without an address? You type `localhost` instead!

For clarity, let's go through all the steps one more time.

* Let's say I bought our eductional puzzle game called _Potion Puzzle_. 
* I download the game and find the `web` folder.
* I rename it to something I like, such as `potions`.
* I move this folder to `C:\johndoe\my-own-host\` (or wherever you told XAMPP to host)
* I tell XAMPP to start.
* Now I can play the game by typing `http://localhost/potions` in the browser bar!

The process is quick and simple once you've done it once or twice. It's quite powerful to be able to host a lot of web games on your own server. Especially if it's a school server, you can host them for _all students_ to access at any time, from any device that has a browser. 

If you have any more questions about this, don't hesitate to contact us!

## Android

This folder contains a single `.aab` file ("Android App Bundle").

{{% remark %}}
On older games of ours, it might be an `.apk` file ("Android Package"). This will work fine too. The AAB is simply a "bundle" of multiple packages so that it can optimize the game by installing the best one for your specific device.
{{% /remark %}}

First, you should move this file **onto your phone**. You can do this in numerous ways.

* Connect your phone via USB cable. Most providers have an app to allow changing settings and transfering files. If not, the phone should appear as a USB drive on your PC, and you can move the game onto it.
* Use an app for wireless phone transfer. They usually ask you to go to a website, scan a QR code with your phone, and then they can "connect" your browser and your phone. Now you can drag-and-drop files to move them.
* Upload the file to something like Google Drive, which you can then access through the Drive app on your phone.

However you do it, the file needs to be somewhere on your phone. 

Once that's done, you can tap it and choose **Install**. Sometimes you need to _hold_ the file for a bit. Sometimes you first need to choose the option to "show in Files", which means you're redirected to where the file actually is.

Most Android phones allow installing games/apps directly from a file. 

Some might block it initially, perhaps because of security. Unfortunately, this differs greatly between phone brands and Android versions. The best thing you can do is search for "how to install `.aab` file on `your_phone_model_here`". 

Most cases we've seen require you to enable "Developer Mode" on your phone. This can be enabled by tapping the `Build Number` in your device's **Settings** multiple times in quick succession.

_Why don't you make the games available on the Play Store?_ Unfortunately, it's a very hostile environment. At one point we've had ~10 games available on there, but it was a struggle to work with them, and they kept being removed for literally no reason at all. They claimed we broke some tiny rule, we said we never did that and never would, and it did not matter. They simply only care about their own ad revenue and profits and will let their algorithms destroy anyone they don't need. You can look up countless testimonials from other "smaller" developers online about Play Store and its horrors!

## iOS (iPhone / iPad)

This folder contains a single `.app` file. 

The first step is to **move this file onto your phone/device**. 

* Some devices allow connecting via USB or some other cable. If so, you'd be able to treat your phone like a USB thumb drive, and simply move the game onto it.
* If your PC is also from Apple, you can use their AirDrop functionality to easily move this file onto your phone.
* (If all else fails, you could use a Bluetooth connection, or even upload the file to your iCloud and download from it on your phone. But these really should not be necessary. Contact us if you need more help!)

By default, iOS does _not_ allow installing your own files. It only allows installing through the App Store, which we're currently not using for our games. As such, you'll need an **app that allows "sideloading"**. Popular ones are AltStore or Sideloadedly.

Using such an app, locate the game file and install it on your phone. From now on, it should just be a regular app that you can play whenever you want.

_Why don't you make the games available on the App Store?_ Similar to the Play Store, it's a hostile environment that is not at all conducive to making good games or providing the best possible educational content. They ask a lot of money and put a lot of restrictions on you, and in return ... take even more money and will silently make you disappear for no reason. We do _not_ want to put advertisments in our games, we do _not_ want to breach your privacy, we do _not_ want to expose kids to all the dark patterns in the App Store / mobile world. In the current situation, we can't uphold these simple moral principles and be on the App Store at the same time.

## Chromebook

Chromebooks are interesting. They're a messy mixture of different technologies and ideas, but somehow managed to see widespread usage, _especially_ in educational contexts. It makes our lives as developers a little harder ... but that's also why we wanted to support Chromebooks too and clearly explain how to play these games.

Behind the scenes, a Chromebook is **built on top of Linux**, and runs something called **ChromeOS**. For the most part, this is just a **browser** and **app loader**.

* Any of our games available on the **Play Store** can already be installed on Chromebooks. (Because Google is the main developer of ChromeOS and _also_ the main developer of Android!)
* If you use our **Web** version (see instructions there), you can simply visit the web address of the game in the Chrome browser. 
* Otherwise, you can install the **Linux** version of the game directly onto the Chromebook.

The first two methods are very easy and straightforward. Either install an app as usual, or visit a website as usual. 

The third one will receive a bit more explanation now. It's recommended to anyone with computer expertise (or experience with Linux), but _not_ recommended for anyone else.

### Linux Install

To enable the Linux environment on your Chromebook, [follow Google's official steps](https://support.google.com/chromebook/answer/9145439?hl=en).

* Turn on the Linux environment in **Settings > About > Developers**
* Click **Setup**
* Follow the on-screen instructions. It takes about 10 minutes.

Now get the **Linux** folder of the game onto your Chromebook. Either transfer it via Drive, download it directly on the Chromebook, or use a USB cable. By default, though, it is _not_ available to this Linux system. You can share whatever folder to your Linux install from the Files app: **right click, share to Linux**. 

When installation finishes, a "terminal window" (or "command prompt") opens. A small black box with white text. That's how you interact with this Linux core running your Chromebook. 

It may look intimidating, but you don't need to understand it. You only need to know two commands.

* Type `cd path/to/linux/folder`. This means "change directory", which means you're telling it where the folder with the game is.
* Type `./name-of-the-game.x86_64`. Where name-of-the-game should be replaced by the actual file name. It should run now!
* (If the system tells you it can't execute this file, then type `chmod +x name-of-the-game.x86_64`. This _makes_ the file executable. Now try again.)
* (If it tells you that you don't have permission, put `sudo ` in front of the command. This is similar to running things as an Administrator on Windows or Mac, if you're familiar with that.)

That's it. Whenever you want to run a game, open the terminal, find where it is, and type `./` followed by the game file.

Most likely, you _don't_ want to do this every time. You just want a nice desktop shortcut to click. 

* Create a `game-name.desktop` file through the Files app.
* Put the following data about the app inside. Where game-name should be replaced with the actual file name.

```
[Desktop Entry]
Name=NameOfShortcut
Exec=/path/to/linux/folder/game-name
Terminal=false
Type=Application 
``` 

Here are two threads explaining how to do this: [Add Linux Apps To Home Screen](https://support.google.com/pixelbook/thread/708306/how-do-i-add-linux-apps-to-the-home-screen?hl=en) and [Create Linux Applications](https://www.reddit.com/r/chromeos/comments/sxbwnf/is_there_a_way_to_create_linux_application/).

As stated, this is not a good method for people without computer expertise. On the other hand, if you know what you're doing (somewhat), this allows storing many games permanently on a Chromebook and making them easy to access. 

## Anywhere Else?

We do our best to code and create our games in a way that makes them flexible. They're usually small, fast, lightweight, and not dependent on anything else (such as a Wi-Fi connection). This means they are _likely_ to work in other environments too! Most other devices use one of the main operating systems (or a browser) behind the scenes, such as a Chromebook. It's always worth a try getting a game you bought onto a new device. 

If needed, you can **request support for a specific system**! 

Games can't always be made available for all platforms at launch. For example, sometimes there are issues with touchscreen support but we don't want to delay releasing this amazing new game, so we decide not to support Android/iOS for now. _If you find a game and want to give it to your students on a phone, you can put in a request for an Android port and we'll see if we can honor it._

Don't hesitate to [contact](/info/contact/) us. It's hard to support such a variety of platforms and we're learning all the time.

Hopefully this article answered your questions and helped you install and play one of our digital products.