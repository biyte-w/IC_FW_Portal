#ESP-IDF Partition Table
#Name, Type, SubType, Offset, Size, Flags
nvs,data,nvs,0x9000,20K,
otadata,data,ota,0xe000,8K,
app0,app,ota_0,0x10000,5M,
app1,app,ota_1,0x510000,5M,
spiffs,data,spiffs,0xa10000,5M,
