
function createUpload(container, pickfiles, uploadfiles, filelist) {

    var uploader = new plupload.Uploader({

        runtimes: 'html5,flash,silverlight,html4',

        browse_button: pickfiles, // you can pass in id...

        container: document.getElementById(container), // ... or DOM Element itself

        url: '/UploadArea/home/upload',

        flash_swf_url: '/Plugins/plupload-2.1.2/js/Moxie.swf',

        silverlight_xap_url: '/Plugins/plupload-2.1.2/js/Moxie.xap',

        filters: {
         //   max_file_size: '10mb',
            max_file_size: '100mb',
            mime_types: [
                { title: "Image files", extensions: "jpg,gif,png" },
                { title: "Zip files", extensions: "zip" }
            ]
        },

        init: {
            PostInit: function () {
                document.getElementById(filelist).innerHTML = '';
                document.getElementById(uploadfiles).onclick = function () {
                    uploader.start();
                    return false;
                };
            },

            FilesAdded: function (up, files) {
                plupload.each(files, function (file) {
                    document.getElementById(filelist).innerHTML += '<div id="' + file.id + '">' + file.name + ' (' + plupload.formatSize(file.size) + ') <b></b></div>';
                });
            },
            FileUploaded: function (up, file, info) {
              
            },
            UploadProgress: function (up, file) {
                document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            },

            Error: function (up, err) {
                document.getElementById('console').innerHTML += "\nError #" + err.code + ": " + err.message;
            }
        }
    });
    return uploader;
}

//上传图片
//"/UserArea/Home/UploadCertificate"
 function SaveCertificate(Action) {
        $.ajax({
            type: 'post',
            url: Action,
            data: { "files": ReturnFiles },
            success: function (result) {
                if (result.status == "success") {
                    alert(result.info);
                }
                else if (result.status == "error") {
                    alert(result.info);
                }
            },
            error: function () {
                alert(result.info);
            }
        });
    }

//uploader.init();

//获取图片
//   "/UserArea/Home/GetCertificate"
 //function GetCertificate(Action, Data) {
 function GetDocImg(Action,Data) {

     var Uploaded = "/Uploaded/Original/";

     $.ajax({
         type: 'post',
         url: Action,
         data: { "Data": Data },
         success: function (result) {
             if (result.status == "success") {

                 var imglist = result.imglist;
                 for (var i = 0; i < imglist.length; i++)
                 {
                     var FilePath = Uploaded + imglist[i].Url;
                  
                     if(imglist[i].SubTypeTag=="文章首页")
                     {
                         $("#pic1").attr('src', FilePath);
                     }
                     else if (imglist[i].SubTypeTag == "文章列表页")
                     {
                         $("#pic2").attr('src', FilePath);
                     }
                     else if (imglist[i].SubTypeTag == "文章详细页")
                     {
                         $("#pic3").attr('src', FilePath);
                     }
                 }
                // $("#Photo").val(JSON.stringify(imglist));

             }
             else if (result.status == "failed") {
                 alert(result.info);
             }
             else if (result.status == "error") {
                 alert(result.info);
             }
         },
         error: function () {
             alert(result.info);
         }
     });
 }
 function GetCertificate(Action, Data) {

     var Uploaded = "/Uploaded/Original/";

     $.ajax({
         type: 'post',
         url: Action,
         data: { "Data": Data },
         success: function (result) {
             if (result.status == "success") {

                 var imglist = result.imglist;
                 for (var i = 0; i < imglist.length; i++) {
                     var FilePath = Uploaded + imglist[i].Url;

                     if (imglist[i].SubTypeTag == "法人营业执照") {
                         $("#pic1").attr('src', FilePath);
                     }
                     else if (imglist[i].SubTypeTag == "税务登记证") {
                         $("#pic2").attr('src', FilePath);
                     }
                     else if (imglist[i].SubTypeTag == "组织机构代码证") {
                         $("#pic3").attr('src', FilePath);
                     }
                 }
                 // $("#Photo").val(JSON.stringify(imglist));

             }
             else if (result.status == "failed") {
                 alert(result.info);
             }
             else if (result.status == "error") {
                 alert(result.info);
             }
         },
         error: function () {
             alert(result.info);
         }
     });
 }
//上传图片实体
 function mpic(Url, SubTypeTag)
 {
     this.Url = Url;
     this.SubTypeTag = SubTypeTag;
 }


//上传文件实体
 function mfile(Url,FileType, SubTypeTag) {
     this.Url = Url;
     this.FileType=FileType
     this.SubTypeTag = SubTypeTag;
 }

 //询价ajax提交
// /Admin/Inquiries/Create
 function InqeuryAjax(Action, data,file) {

     var token = $('input[name="__RequestVerificationToken"]').val();

     //, "__RequestVerificationToken": token + "" + $('form[action="/TransportJobAddress/Create"]').serialize()

     $.ajax({
         type: 'post',
         url: Action,
         data: { "inquiry": data, "__RequestVerificationToken": token, "file": file },
         success: function (result) {
             //if (result.status == "success") {
             //    //alert(result.info);
             //    location.href = result.url;
             //}
             //else if (result.status == "error") {
             //    //alert(result.info);
             //    location.href = result.url;
             //}
             //alert($("body").html());
             $("body").html(result);
         },
         error: function () {
             alert(result.info);
         }
     });
 }


////专题资源入库
// function SpecialTopics(Action, data, type, SpecialTopicId)
// {
//     $.ajax({
//         type: 'post',
//         url: Action,
//         data: { "Special": data, "type": type, "SpecialTopicId": SpecialTopicId },
//         success: function (result) {
//             if (result.status == "success") {
//                 alert(result.info);
//             }
//             else if (result.status == "error") {
//                 alert(result.info);
//             }
//         },
//         error: function () {
//             alert(result.info);
//         }
//     });
// }
 //专题资源入库
 function SpecialTopics(Action, data) {
     $.ajax({
         type: 'post',
         url: Action,
         data: { "Items": data },
         success: function (result) {
             if (result.status == "success") {
                 alert(result.info);
             }
             else if (result.status == "error") {
                 alert(result.info);
             }
         },
         error: function () {
             alert(result.info);
         }
     });
 }
// //搜索
////"/SearchEngine/Home/Search"
// function SearchInfo(Action) {
//     $.ajax({
//         type: 'post',
//         url: Action,
//         data: { "files": ReturnFiles },
//         success: function (result) {
//             if (result.status == "success") {
//                 alert(result.info);
//             }
//             else if (result.status == "error") {
//                 alert(result.info);
//             }
//         },
//         error: function () {
//             alert(result.info);
//         }
//     });
// }
