"use client";

import { BuilderComponent, useIsPreviewing } from "@builder.io/react";
import { builder } from "@builder.io/sdk";
import DefaultErrorPage from "next/error";
import "../builder-registry";
import React from "react";

builder.init("95c9a32cd06344f7a6c73cf667b421cc");

export function RenderBuilderContent({ content, model }) {
  const isPreviewing = useIsPreviewing();
  if (content || isPreviewing) {
    return <BuilderComponent content={content} model={model} />;
  }
  return <DefaultErrorPage statusCode={404} />;
}
