#!/bin/bash
cd /home/kavia/workspace/code-generation/recipevault-59776-e0cd3791/recipevault_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

