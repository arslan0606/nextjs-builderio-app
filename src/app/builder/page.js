import React from "react";
import { builder } from "@builder.io/sdk"
import { RenderBuilderContent } from "@/components/builder"
import styles from '../styles/Page.module.css'


builder.init("95c9a32cd06344f7a6c73cf667b421cc");

export default async function BuilderPage(props) {
  const builderModelName = "page";

  const content = await builder
    .get(builderModelName, {
      userAttributes: {
        urlPath: "/builder" + (props?.params?.page?.join("/") || ""),
      },
    })
    .toPromise();

  // Fetch structured data
  const structuredData = await builder
    .get("structured-data", {
      userAttributes: {
        urlPath: '/builder',
      },
    })
    .toPromise();

  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} />

      {/* Render the structured data */}
      <div className={styles.center} data-testid="my-component">
        <h1 className={styles.header}>Links</h1>
        <ul className={styles.linkList}>
          <li className={styles.linkItem}><a href={structuredData?.data?.link1} target="_blank" rel="noopener noreferrer" className={styles.link}>YouTube</a></li>
          <li className={styles.linkItem}><a href={structuredData?.data?.link2} target="_blank" rel="noopener noreferrer" className={styles.link}>Facebook</a></li>
        </ul>
      </div>
    </>
  );
}