#!/usr/bin/env node
import { taste } from './main'

taste("🍔").then(value => console.log(`🍔 is ${value}`))
taste("🥐").then(value => console.log(`🥐 is ${value}`)).catch(reason => console.error(`🥐 ${reason}`))
