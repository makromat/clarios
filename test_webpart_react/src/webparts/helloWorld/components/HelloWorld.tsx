import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';
import { sp } from "@pnp/sp/presets/all";

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {
  public render(): React.ReactElement<IHelloWorldProps> {

    const testfunction = (async () => {

        //const lists = await sp.web.lists();

       //console.log(lists);
sp.web
  .select("Title")()
  .then(w => {
    console.log(`Web Title: ${w.Title}`);
  });


  //const items: any[] = await sp.web.lists.getByTitle("My List").items.get();
  //console.log(items);


                                       /*const profile = await sp.profiles.myProperties.get();
        const itemData = await sp.web.lists.getById('').items.getById(1)();

        console.log("profile.DisplayName" + profile.DisplayName);
        console.log(profile.Email);
        console.log(profile.Title);
        console.log(profile.UserProfileProperties.length);*/
                                     })();


    return (
      <div className={styles.helloWorld}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <span className={styles.title}>
                Welcome to SharePoint!
              </span>
              <a href="https://aka.ms/spfx" className={styles.button}>
                <span className={styles.label}>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
