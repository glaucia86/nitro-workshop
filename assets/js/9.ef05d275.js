(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{218:function(t,s,a){t.exports=a.p+"assets/img/happycat.b0ef3f29.jpg"},234:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"_4-integrate-file-upload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_4-integrate-file-upload"}},[t._v("#")]),t._v(" 4. Integrate file upload")]),t._v(" "),e("p",[t._v("Our API is starting to look great now that we can add new stories. But it would be even better if we could attach some cute pictures to our stories, right?")]),t._v(" "),e("p",[e("img",{attrs:{src:a(218),alt:"happy cay saying yes",width:"400"}})]),t._v(" "),e("h2",{attrs:{id:"configure-azure-storage-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configure-azure-storage-module"}},[t._v("#")]),t._v(" Configure Azure Storage module")]),t._v(" "),e("p",[t._v("We will use "),e("a",{attrs:{href:"https://azure.microsoft.com/services/storage/blobs/?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Blob Storage"),e("OutboundLink")],1),t._v(" to store pets images in the cloud. It can be used to store any kind of file, and is also capable of "),e("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/blobs/storage-blob-static-website?WT.mc_id=nitro-workshop-yolasors",target:"_blank",rel:"noopener noreferrer"}},[t._v("hosting static websites"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("p",[t._v("As you already created a storage account in "),e("a",{attrs:{href:"/step2"}},[t._v("Step 2")]),t._v(", you only need to integrate the "),e("code",[t._v("@nestjs/azure-storage")]),t._v(" package with this command:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @nestjs/azure-storage\n")])])]),e("p",[t._v("Open the file "),e("code",[t._v("src/app.module.ts")]),t._v(" and add the "),e("code",[t._v("AzureStorageModule")]),t._v(" to the module imports:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Module")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  imports"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    AzureStorageModule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("withConfig")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      sasKey"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AZURE_STORAGE_SAS_KEY")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      accountName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" process"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("AZURE_STORAGE_ACCOUNT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      containerName"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'funpets-images'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("Don't forget to add the missing imports at the top:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AzureStorageModule "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/azure-storage'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"handle-file-upload"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handle-file-upload"}},[t._v("#")]),t._v(" Handle file upload")]),t._v(" "),e("p",[t._v("Now let's update the "),e("code",[t._v("POST /api/stories")]),t._v(" endpoint to add support for image upload.")]),t._v(" "),e("p",[t._v("Open "),e("code",[t._v("stories.controller.ts")]),t._v(" and update the function you created to create new stories:")]),t._v(" "),e("ul",[e("li",[t._v("Add "),e("code",[t._v("@UseInterceptors(AzureStorageFileInterceptor('file'))")]),t._v(" just below the "),e("code",[t._v("@Post()")]),t._v(" annotation.")]),t._v(" "),e("li",[t._v("Add "),e("code",[t._v("@UploadedFile() file: UploadedFileMetadata")]),t._v(" in the function parameters.")])]),t._v(" "),e("p",[t._v("Don't forget to also add the missing imports at the top:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" FileInterceptor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/platform-express'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" AzureStorageFileInterceptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UploadedFileMetadata "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/azure-storage'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" UseInterceptors"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" UploadedFile "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@nestjs/common'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("The "),e("code",[t._v("AzureStorageFileInterceptor")]),t._v(" will directly upload the file to Azure Storage container "),e("code",[t._v("funpets-images")]),t._v(" specified in the module configuration, and will fill in the stored file url in "),e("code",[t._v("file.storageUrl")]),t._v(".")]),t._v(" "),e("p",[t._v("Once you have the storage URL you can set the "),e("code",[t._v("imageUrl")]),t._v(" of the created "),e("code",[t._v("Story")]),t._v(" entity.")]),t._v(" "),e("p",[t._v("Your final function should looks like this:")]),t._v(" "),e("div",{staticClass:"language-ts extra-class"},[e("pre",{pre:!0,attrs:{class:"language-ts"}},[e("code",[t._v("@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Post")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n@"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UseInterceptors")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("AzureStorageFileInterceptor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createStory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Body")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Partial"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Story"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  @"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("UploadedFile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" UploadedFileMetadata"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Promise")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("Story"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" story "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Story")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("story"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createdAt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    story"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("createdAt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  story"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("imageUrl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" file"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storageUrl "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("storiesRepository"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("story"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h2",{attrs:{id:"test-your-endpoint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-your-endpoint"}},[t._v("#")]),t._v(" Test your endpoint")]),t._v(" "),e("p",[t._v("After you finished the modifications, start your server using the functions emulator:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run start:azure\n")])])]),e("p",[t._v("After the server is started, you can test if uploading file works using "),e("code",[t._v("curl")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost:7071/api/stories "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -F "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file=@<path_to_image_file>"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -F "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"animal=cat"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -F "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description=Happy cat!"')]),t._v("\n")])])]),e("p",[t._v("You can download and use the "),e("a",{attrs:{href:"#_4-integrate-file-upload"}},[t._v("the happy cat image")]),t._v(" to test the file upload if don't have an image at hand.")]),t._v(" "),e("div",{staticClass:"custom-block info"},[e("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),e("p",[t._v("Using the "),e("code",[t._v("-F")]),t._v(" curl option will automatically set the request content type to "),e("code",[t._v("multipart/form-data")]),t._v(" which is required for Nest.js file upload support. Note that in that case, the payload for the "),e("code",[t._v("Story")]),t._v(" property will also have to be form data and not JSON, as you can see in the curl command.")])]),t._v(" "),e("h2",{attrs:{id:"limit-accepted-file-type-and-size"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#limit-accepted-file-type-and-size"}},[t._v("#")]),t._v(" Limit accepted file type and size")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Add some restrictions on uploaded files and error management: file size, dimensions…")]),t._v(" "),e("li",[t._v("Test again with curl, fail/success")])]),t._v(" "),e("h2",{attrs:{id:"redeploy"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redeploy"}},[t._v("#")]),t._v(" Redeploy")]),t._v(" "),e("p",[t._v("Once everything works locally let's deploy your latest changes:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build your app")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Create an archive from your local files and publish it")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Don't forget to change the name with the one you used previously")]),t._v("\nfunc azure functionapp publish funpets-api\n")])])]),e("p",[t._v("Then run again the previous "),e("code",[t._v("curl")]),t._v(" command against your deployed API URL to check that everything works fine:")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" https://"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("your-funpets-api"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(".azurewebsites.net/api/stories\n  -F "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"file=@<path_to_image_file>"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -F "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"animal=cat"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  -F "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"description=Happy cat!"')]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);