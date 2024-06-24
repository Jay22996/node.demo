var assins = require("../../../Model/exercisemedel/Assign_exercisemodel");
var group = require("../../../Model/exercisemedel/exercise_groupmodel");
var item = require("../../../Model/exercisemedel/exercise_itemmodel");
var dayy = require("../../../Model/kasratModel/Daily_data");

var mongoose = require("mongoose");

class assign_exerciseViewModel {


  chack_assign = async (req, res) => {
    try {
        var user_id = req.params.id;
        var data = await assins.find({ user_id: user_id }).select({ date: 1 });
      
        // const currentDate = new Date();
        // const cday = currentDate.getDate();
        // const cmonth = currentDate.getMonth() + 1;
        // const cyear = currentDate.getFullYear();
        const cday = req.params.dd
        const cmonth = req.params.mm
        const cyear = req.params.yy

      
        var cdate = `${cday}/${cmonth}/${cyear}`;
      
        for (var i = 0; i < data.length; i++) {
          var ddate = data[i].date;
      
          const mdate = new Date(ddate);
          const mday = mdate.getDate();
          const mmonth = mdate.getMonth() + 1;
          const myear = mdate.getFullYear();
      
          var mdate1 = `${mday}/${mmonth}/${myear}`;
          //  console.log(mdate1);
      
          if (cdate == mdate1) {
            var index = i;
            break;
          }
        }
        if (index == undefined) {
          res.status(200).json({
            status: "not assigned",
          });
        } else {
          var data5 = await assins.find({ user_id: user_id });
          var data6 = data5[index];
          res.status(200).json({
            status: "assigned",
            data6,
          });
        }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  assign_add = async (req, res) => {
    try {
        var id = req.params.id;
        var data = await group.findById(id).select({ exercise_list: 1 });
        var exerciseList = data.exercise_list;
        // console.log(data)
        let currentDate = new Date();
      
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1;
        let year = currentDate.getFullYear();
      
        day = day < 10 ? "0" + day : day;
        month = month < 10 ? "0" + month : month;
      
        let formattedDate = `${day}${month}${year}`;
      
        var id = `${formattedDate}${formattedDate}${formattedDate}`;
      
        const objectId = new mongoose.Types.ObjectId(id);
        var report = await dayy.findOne(objectId);
        console.log(report);
        if (report == null) {
          req.body._id = id;
          req.body.like = 0;
          req.body.fire = 0;
          req.body.post = 0;
          req.body.attendance = 0;
          req.body.work_out = 1;
          req.body.diet = 0;
          req.body.inquiry = 0;
          req.body.user_req = 0;
          var report = await dayy.create(req.body);
        } else {
          var report = await dayy.findOneAndUpdate(
            { _id: id },
            { $inc: { work_out: 1 } }
          );
        }
        req.body.group_id = id;
        req.body.exe_group_list = exerciseList;
        var data = await assins.create(req.body);
        res.status(200).json({
          status: "assigned",
          data,
        });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  assign_delete = async (req, res) => {
    try {
        var id = req.params.id;
        const data = await assins.findByIdAndDelete(id);
        res.status(200).json({
          status: "done",
          data,
        });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  // assign_show = async (req, res) => {
  //   try {
  //       var user_id = req.params.id;
  //       var data = await assins.find({ user_id: user_id }).select({ date: 1 });
  //       if (data.length == 0) {
  //         res.status(200).json({
  //           status: "not assign",
  //         });
  //       } else {
  //         const currentDate = new Date();
  //         const cday = currentDate.getDate();
  //         const cmonth = currentDate.getMonth() + 1;
  //         const cyear = currentDate.getFullYear();
      
  //         var cdate = `${cday}/${cmonth}/${cyear}`;
  //         // console.log(cdate)
      
  //         for (var i = 0; i < data.length; i++) {
  //           var ddate = data[i].date;
      
  //           const mdate = new Date(ddate);
  //           const mday = mdate.getDate();
  //           const mmonth = mdate.getMonth() + 1;
  //           const myear = mdate.getFullYear();
      
  //           var mdate1 = `${mday}/${mmonth}/${myear}`;
  //           if (mdate1 == cdate) {
  //             var data1 = await assins.find({ user_id: user_id });
  //             var data2 = data1[i];
  //             var list = [];
  //             const exerciseItemIds = data2.exe_group_list.map(
  //               (item) => item.exercise_item_id
  //             );
      
  //             for (let j = 0; j < data2.exe_group_list.length; j++) {
  //               const exerciseItemId = data2.exe_group_list[j].exercise_item_id;
      
  //               var group = await item.find({ _id: exerciseItemId });
  //               list.push(group[0]);
  //             }
      
  //             res.status(200).json({
  //               status: " assign",
  //               data: data2,
  //               list,
  //             });
  //             break;
  //           } else if (i == data.length - 1 && mdate1 != cdate) {
  //             res.status(200).json({
  //               status: " not assign",
  //             });
  //           }
  //         }
  //       }
  //   } catch (error) {
  //     res.status(500).json({
  //       status: "error",
  //       message: error.message,
  //     });
  //   }
  // };

  assign_day_wise = async (req, res) => {
    try {
        var user_id = req.params.id;
        var data = await assins.find({ user_id: user_id }).select({ date: 1 });
      
        if (data.length == 0) {
          res.status(200).json({
            status: "not assign",
          });
        } else {
          const cday = req.params.day;
          const cmonth = req.params.month;
          const cyear = req.params.year;
      
          var cdate = `${cday}/${cmonth}/${cyear}`;
         
          for (var i = 0; i < data.length; i++) {
            var ddate = data[i].date;
            const mdate = new Date(ddate);
            const mday = mdate.getDate();
            const mmonth = mdate.getMonth() + 1;
            const myear = mdate.getFullYear();
      
            var mdate1 = `${mday}/${mmonth}/${myear}`;
           
            if (mdate1 == cdate) {
              var data1 = await assins.find({ user_id: user_id });
              var data2 = data1[i];
              var list = [];
              const exerciseItemIds = data2.exe_group_list.map(
                (item) => item.exercise_item_id
              );
      
              for (let j = 0; j < data2.exe_group_list.length; j++) {
                const exerciseItemId = data2.exe_group_list[j].exercise_item_id;
      
                var group = await item.find({ _id: exerciseItemId });
                list.push(group[0]);
              }
      
              res.status(200).json({
                status: " assign..!",
                data: data2,
                list,
              });
              break;
            } else if (i == data.length - 1 && mdate1 != cdate) {
              res.status(200).json({
                status: "not assign",
              });
            }
          }
        }
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

  assign_perform = async (req, res) =>{
    try {
        const id = req.params.id;
        const pid = req.params.pid;
    
        const document = await assins.findById(id);
        const perfort = req.body.perfort;
    
        const updatedData = await assins.findByIdAndUpdate(
          id,
          { $set: { "exe_group_list.$[elem].perform": perfort } },
          { arrayFilters: [{ "elem.performstatus": pid }], new: true }
        );
    
        res.status(200).json({
          status: "done",
          updatedData,
        });
      } catch (error) {
        // console.error(error);
        res.status(500).json({
          status: "error",
          message: "Internal Server Error",
        });
      }
  }
}

module.exports = new assign_exerciseViewModel();