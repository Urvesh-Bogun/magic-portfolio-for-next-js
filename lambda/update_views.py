table = boto3.resource('dynamodb').Table('PortfolioTable')

# Add one to the counter and ask for the new value to be returned
response = table.update_item(
    Key={'pk': 'viewCount'},
    UpdateExpression="ADD #cnt :val",
    ExpressionAttributeNames={'#cnt': 'count'},
    ExpressionAttributeValues={':val': 1},
    ReturnValues="UPDATED_NEW"
)

# Retrieve the new value
nextOrderId = response['Attributes']['count']