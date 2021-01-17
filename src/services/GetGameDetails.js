import React, { useState, useEffect } from "react";

export function GetGameDetails() {

  return fetch('/gameDetails').then(res => res.json()).then(data => {
    return data;
  });

}

