[Cases Client API Interface](../README.md) / [client](../modules/client.md) / [\_internal\_namespace](../modules/client._internal_namespace.md) / RouteConfigOptionsBody

# Interface: RouteConfigOptionsBody

[client](../modules/client.md).[_internal_namespace](../modules/client._internal_namespace.md).RouteConfigOptionsBody

Additional body options for a route

## Table of contents

### Properties

- [accepts](client._internal_namespace.RouteConfigOptionsBody.md#accepts)
- [maxBytes](client._internal_namespace.RouteConfigOptionsBody.md#maxbytes)
- [output](client._internal_namespace.RouteConfigOptionsBody.md#output)
- [parse](client._internal_namespace.RouteConfigOptionsBody.md#parse)

## Properties

### accepts

• `Optional` **accepts**: `string` \| `string`[] \| [`RouteContentType`](../modules/client._internal_namespace.md#routecontenttype)[]

A string or an array of strings with the allowed mime types for the endpoint. Use this settings to limit the set of allowed mime types. Note that allowing additional mime types not listed
above will not enable them to be parsed, and if parse is true, the request will result in an error response.

Default value: allows parsing of the following mime types:
* application/json
* application/*+json
* application/octet-stream
* application/x-www-form-urlencoded
* multipart/form-data
* text/*

#### Defined in

src/core/target/types/server/http/router/route.d.ts:45

___

### maxBytes

• `Optional` **maxBytes**: `number`

Limits the size of incoming payloads to the specified byte count. Allowing very large payloads may cause the server to run out of memory.

Default value: The one set in the kibana.yml config file under the parameter `server.maxPayload`.

#### Defined in

src/core/target/types/server/http/router/route.d.ts:51

___

### output

• `Optional` **output**: ``"data"`` \| ``"stream"``

The processed payload format. The value must be one of:
* 'data' - the incoming payload is read fully into memory. If parse is true, the payload is parsed (JSON, form-decoded, multipart) based on the 'Content-Type' header. If parse is false, a raw
Buffer is returned.
* 'stream' - the incoming payload is made available via a Stream.Readable interface. If the payload is 'multipart/form-data' and parse is true, field values are presented as text while files
are provided as streams. File streams from a 'multipart/form-data' upload will also have a hapi property containing the filename and headers properties. Note that payload streams for multipart
payloads are a synthetic interface created on top of the entire multipart content loaded into memory. To avoid loading large multipart payloads into memory, set parse to false and handle the
multipart payload in the handler using a streaming parser (e.g. pez).

Default value: 'data', unless no validation.body is provided in the route definition. In that case the default is 'stream' to alleviate memory pressure.

#### Defined in

src/core/target/types/server/http/router/route.d.ts:63

___

### parse

• `Optional` **parse**: `boolean` \| ``"gunzip"``

Determines if the incoming payload is processed or presented raw. Available values:
* true - if the request 'Content-Type' matches the allowed mime types set by allow (for the whole payload as well as parts), the payload is converted into an object when possible. If the
format is unknown, a Bad Request (400) error response is sent. Any known content encoding is decoded.
* false - the raw payload is returned unmodified.
* 'gunzip' - the raw payload is returned unmodified after any known content encoding is decoded.

Default value: true, unless no validation.body is provided in the route definition. In that case the default is false to alleviate memory pressure.

#### Defined in

src/core/target/types/server/http/router/route.d.ts:73
