Table users{
    user_id int pk
    user_name varchar(255)
    user_email varchar(30)
    user_batchid varchar(20)
    fees_paid bool
    user_coordinator varchar(20)
  }
  Table Batch{
     id int pk unique
     batch_name varchar(20)
     batch_starttime datetime
     batch_endtime datetime
     batch_course varchar(10)
     batch_count int
  }
  Table Mentor{
    mentor_id int pk
    mentor_name varchar(10)
    mentor_details varchar(20)
  }
  Table Attendence{
    id int
    user int unique
    session_date date
    status bool
  }
  Table Task{
    id int pk
    task_date datetime
    user_id int
    batch_id int
    isCompleted bool
    description varchar(30)
  }
  Table Queries{
    query_id int unique
    user_id int
    user_email varchar(30)
    query_desciption varchar(255)
  }
  Table Topics{
    heading varchar(20)
    description varchar(30)
    isCompleted bool
  }
  
  Ref: users.user_id > Batch.id
  Ref: users.user_id > Task.id
  Ref: Mentor.mentor_id > Batch.id
  Ref: Queries.query_id > users.user_id
  Ref: Queries.query_desciption > users.user_batchid
  Ref: Mentor.mentor_id > Topics.isCompleted
  Ref: Task.description > Topics.description
  Ref: users.user_id > Attendence.status
  
  