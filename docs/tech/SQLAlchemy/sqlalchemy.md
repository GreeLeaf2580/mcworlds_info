# SQL Alchemy

## 连接数据库

连接SQLite

```python
from sqlachemy import create engine
engine = create engine('sqlite:///test.db',echo=True)
connection = engine.connect()
```

连接MySQL

```python
from sqlachemy import create engine
engine = create engine('mysql://user:pwd@localhost/testdb',echo=True)
connection = engine.connect()
```

## 创建表

使用MetaData，Table，Column以及字段类型在代码中来创建表

```python
from sqlalchemy import create_engine,MetaData,Table,Column,Integer,String,Date

engine=create_engine('postgresql://greeleaf:147369@127.0.0.1:5433/test',echo=True)
meta =MetaData()

person=Table(
    "person",meta,
    Column("id",Integer,primary_key=True),
    Column("name",String(128),unique=True,nullable=False),
    Column("birthday",Date,nullable=False),
)
meta.create_all(engine)
```

## 插入表

插入一条记录

```python
person_insert = person.insert()
print(person_insert)
insert_tom = person_insert.values(name="Tom", birthday="2000-10-11")

with engine.connect() as conn:
    result = conn.execute(insert_tom)
    print(result.inserted_primary_key)
    conn.commit()
```

插入多条记录

```python
person_insert = person.insert()
with engine.connect() as conn:
    conn.execute(
        person_insert,
        [
            {"name": "jack", "birthday": "2000-10-13"},
            {"name": "mary", "birthday": "2000-10-14"},
            {"name": "smith", "birthday": "2000-10-15"},
        ],
    )
    conn.commit()
```

