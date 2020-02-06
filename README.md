# ShadowGenerator 
 Simple package help non design to add some shadow

# What is this ?
`npm i shadow --save`

Then...

```
import {shadowGenerate} from "shadowgenerator"

shadowGenerate({
  shadow_type:"soft",
  padding:false

 });

 ```

 ##options

shdowGenerator support two option, both of which are optional:

* *shadow_type* - _hard | soft_ (Defaults to soft) 
* *padding* - _boolean_ (Defaults to false)
