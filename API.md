# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Asset <a name="Asset" id="cdktg.Asset"></a>

#### Initializers <a name="Initializers" id="cdktg.Asset.Initializer"></a>

```typescript
import { Asset } from 'cdktg'

new Asset(model: Construct, id: string, props: AssetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Asset.Initializer.parameter.model">model</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.Asset.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Asset.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.AssetProps">AssetProps</a></code> | *No description.* |

---

##### `model`<sup>Required</sup> <a name="model" id="cdktg.Asset.Initializer.parameter.model"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.Asset.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.Asset.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.AssetProps">AssetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Asset.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktg.Asset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Asset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.Asset.isConstruct"></a>

```typescript
import { Asset } from 'cdktg'

Asset.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktg.Asset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Asset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.Asset.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.Asset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Asset.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.Asset.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.Asset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.Asset.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.Asset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.Asset.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.Asset.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---


### DataAsset <a name="DataAsset" id="cdktg.DataAsset"></a>

#### Initializers <a name="Initializers" id="cdktg.DataAsset.Initializer"></a>

```typescript
import { DataAsset } from 'cdktg'

new DataAsset(model: Construct, id: string, props: DataAssetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.DataAsset.Initializer.parameter.model">model</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.DataAssetProps">DataAssetProps</a></code> | *No description.* |

---

##### `model`<sup>Required</sup> <a name="model" id="cdktg.DataAsset.Initializer.parameter.model"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.DataAsset.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.DataAsset.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.DataAssetProps">DataAssetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.DataAsset.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktg.DataAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.DataAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.DataAsset.isConstruct"></a>

```typescript
import { DataAsset } from 'cdktg'

DataAsset.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktg.DataAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.DataAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.DataAsset.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.quantity">quantity</a></code> | <code><a href="#cdktg.Quantity">Quantity</a></code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.DataAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.DataAsset.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.DataAsset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.DataAsset.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.DataAsset.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="cdktg.DataAsset.property.quantity"></a>

```typescript
public readonly quantity: Quantity;
```

- *Type:* <a href="#cdktg.Quantity">Quantity</a>

---

##### `origin`<sup>Optional</sup> <a name="origin" id="cdktg.DataAsset.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `owner`<sup>Optional</sup> <a name="owner" id="cdktg.DataAsset.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---


### Model <a name="Model" id="cdktg.Model"></a>

#### Initializers <a name="Initializers" id="cdktg.Model.Initializer"></a>

```typescript
import { Model } from 'cdktg'

new Model(project: Construct, id: string, props: ModelProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Model.Initializer.parameter.project">project</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.Model.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Model.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.ModelProps">ModelProps</a></code> | *No description.* |

---

##### `project`<sup>Required</sup> <a name="project" id="cdktg.Model.Initializer.parameter.project"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.Model.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.Model.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.ModelProps">ModelProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Model.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktg.Model.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Model.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.Model.isConstruct"></a>

```typescript
import { Model } from 'cdktg'

Model.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktg.Model.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Model.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.Model.property.author">author</a></code> | <code><a href="#cdktg.Author">Author</a></code> | *No description.* |
| <code><a href="#cdktg.Model.property.businessCriticality">businessCriticality</a></code> | <code><a href="#cdktg.BusinessCriticality">BusinessCriticality</a></code> | *No description.* |
| <code><a href="#cdktg.Model.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Model.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Model.property.date">date</a></code> | <code>Date</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.Model.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `author`<sup>Required</sup> <a name="author" id="cdktg.Model.property.author"></a>

```typescript
public readonly author: Author;
```

- *Type:* <a href="#cdktg.Author">Author</a>

---

##### `businessCriticality`<sup>Required</sup> <a name="businessCriticality" id="cdktg.Model.property.businessCriticality"></a>

```typescript
public readonly businessCriticality: BusinessCriticality;
```

- *Type:* <a href="#cdktg.BusinessCriticality">BusinessCriticality</a>

---

##### `title`<sup>Required</sup> <a name="title" id="cdktg.Model.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktg.Model.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `date`<sup>Optional</sup> <a name="date" id="cdktg.Model.property.date"></a>

```typescript
public readonly date: Date;
```

- *Type:* Date

---


### Project <a name="Project" id="cdktg.Project"></a>

#### Initializers <a name="Initializers" id="cdktg.Project.Initializer"></a>

```typescript
import { Project } from 'cdktg'

new Project(props?: ProjectProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Project.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.ProjectProps">ProjectProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="cdktg.Project.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.ProjectProps">ProjectProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Project.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktg.Project.synth">synth</a></code> | Synthesizes the model to the output directory. |

---

##### `toString` <a name="toString" id="cdktg.Project.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `synth` <a name="synth" id="cdktg.Project.synth"></a>

```typescript
public synth(): void
```

Synthesizes the model to the output directory.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Project.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.Project.isConstruct"></a>

```typescript
import { Project } from 'cdktg'

Project.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktg.Project.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Project.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.Project.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which models will be synthesized. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdktg.Project.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The output directory into which models will be synthesized.

---


### TechnicalAsset <a name="TechnicalAsset" id="cdktg.TechnicalAsset"></a>

#### Initializers <a name="Initializers" id="cdktg.TechnicalAsset.Initializer"></a>

```typescript
import { TechnicalAsset } from 'cdktg'

new TechnicalAsset(model: Construct, id: string, props: TechnicalAssetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.TechnicalAsset.Initializer.parameter.model">model</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.TechnicalAssetProps">TechnicalAssetProps</a></code> | *No description.* |

---

##### `model`<sup>Required</sup> <a name="model" id="cdktg.TechnicalAsset.Initializer.parameter.model"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.TechnicalAsset.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.TechnicalAsset.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.TechnicalAssetProps">TechnicalAssetProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.TechnicalAsset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktg.TechnicalAsset.communicatedWith">communicatedWith</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.processed">processed</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.stored">stored</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktg.TechnicalAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `communicatedWith` <a name="communicatedWith" id="cdktg.TechnicalAsset.communicatedWith"></a>

```typescript
public communicatedWith(id: string, target: TechnicalAsset, options: CommunicationOptions): Communication
```

###### `id`<sup>Required</sup> <a name="id" id="cdktg.TechnicalAsset.communicatedWith.parameter.id"></a>

- *Type:* string

---

###### `target`<sup>Required</sup> <a name="target" id="cdktg.TechnicalAsset.communicatedWith.parameter.target"></a>

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

###### `options`<sup>Required</sup> <a name="options" id="cdktg.TechnicalAsset.communicatedWith.parameter.options"></a>

- *Type:* <a href="#cdktg.CommunicationOptions">CommunicationOptions</a>

---

##### `processed` <a name="processed" id="cdktg.TechnicalAsset.processed"></a>

```typescript
public processed(assets: DataAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.TechnicalAsset.processed.parameter.assets"></a>

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---

##### `stored` <a name="stored" id="cdktg.TechnicalAsset.stored"></a>

```typescript
public stored(assets: DataAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.TechnicalAsset.stored.parameter.assets"></a>

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.TechnicalAsset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.TechnicalAsset.isConstruct"></a>

```typescript
import { TechnicalAsset } from 'cdktg'

TechnicalAsset.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktg.TechnicalAsset.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.TechnicalAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.TechnicalAsset.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.assetType">assetType</a></code> | <code><a href="#cdktg.AssetType">AssetType</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.encryption">encryption</a></code> | <code><a href="#cdktg.Encryption">Encryption</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.humanUse">humanUse</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.internet">internet</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.machine">machine</a></code> | <code><a href="#cdktg.Machine">Machine</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.multiTenant">multiTenant</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.redundant">redundant</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.size">size</a></code> | <code><a href="#cdktg.Size">Size</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.technology">technology</a></code> | <code><a href="#cdktg.Technology">Technology</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.scope">scope</a></code> | <code><a href="#cdktg.Scope">Scope</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.TechnicalAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.TechnicalAsset.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.TechnicalAsset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.TechnicalAsset.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.TechnicalAsset.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="cdktg.TechnicalAsset.property.assetType"></a>

```typescript
public readonly assetType: AssetType;
```

- *Type:* <a href="#cdktg.AssetType">AssetType</a>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="cdktg.TechnicalAsset.property.encryption"></a>

```typescript
public readonly encryption: Encryption;
```

- *Type:* <a href="#cdktg.Encryption">Encryption</a>

---

##### `humanUse`<sup>Required</sup> <a name="humanUse" id="cdktg.TechnicalAsset.property.humanUse"></a>

```typescript
public readonly humanUse: boolean;
```

- *Type:* boolean

---

##### `internet`<sup>Required</sup> <a name="internet" id="cdktg.TechnicalAsset.property.internet"></a>

```typescript
public readonly internet: boolean;
```

- *Type:* boolean

---

##### `machine`<sup>Required</sup> <a name="machine" id="cdktg.TechnicalAsset.property.machine"></a>

```typescript
public readonly machine: Machine;
```

- *Type:* <a href="#cdktg.Machine">Machine</a>

---

##### `multiTenant`<sup>Required</sup> <a name="multiTenant" id="cdktg.TechnicalAsset.property.multiTenant"></a>

```typescript
public readonly multiTenant: boolean;
```

- *Type:* boolean

---

##### `owner`<sup>Required</sup> <a name="owner" id="cdktg.TechnicalAsset.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `redundant`<sup>Required</sup> <a name="redundant" id="cdktg.TechnicalAsset.property.redundant"></a>

```typescript
public readonly redundant: boolean;
```

- *Type:* boolean

---

##### `size`<sup>Required</sup> <a name="size" id="cdktg.TechnicalAsset.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* <a href="#cdktg.Size">Size</a>

---

##### `technology`<sup>Required</sup> <a name="technology" id="cdktg.TechnicalAsset.property.technology"></a>

```typescript
public readonly technology: Technology;
```

- *Type:* <a href="#cdktg.Technology">Technology</a>

---

##### `scope`<sup>Optional</sup> <a name="scope" id="cdktg.TechnicalAsset.property.scope"></a>

```typescript
public readonly scope: Scope;
```

- *Type:* <a href="#cdktg.Scope">Scope</a>

---


### TrustBoundary <a name="TrustBoundary" id="cdktg.TrustBoundary"></a>

#### Initializers <a name="Initializers" id="cdktg.TrustBoundary.Initializer"></a>

```typescript
import { TrustBoundary } from 'cdktg'

new TrustBoundary(model: Construct, id: string, props: TrustBoundaryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.TrustBoundary.Initializer.parameter.model">model</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.TrustBoundaryProps">TrustBoundaryProps</a></code> | *No description.* |

---

##### `model`<sup>Required</sup> <a name="model" id="cdktg.TrustBoundary.Initializer.parameter.model"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.TrustBoundary.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.TrustBoundary.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.TrustBoundaryProps">TrustBoundaryProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.TrustBoundary.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktg.TrustBoundary.addTechnicalAssets">addTechnicalAssets</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.addTrustBoundary">addTrustBoundary</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktg.TrustBoundary.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addTechnicalAssets` <a name="addTechnicalAssets" id="cdktg.TrustBoundary.addTechnicalAssets"></a>

```typescript
public addTechnicalAssets(assets: TechnicalAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.TrustBoundary.addTechnicalAssets.parameter.assets"></a>

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

##### `addTrustBoundary` <a name="addTrustBoundary" id="cdktg.TrustBoundary.addTrustBoundary"></a>

```typescript
public addTrustBoundary(boundary: TrustBoundary): void
```

###### `boundary`<sup>Required</sup> <a name="boundary" id="cdktg.TrustBoundary.addTrustBoundary.parameter.boundary"></a>

- *Type:* <a href="#cdktg.TrustBoundary">TrustBoundary</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.TrustBoundary.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.TrustBoundary.isConstruct"></a>

```typescript
import { TrustBoundary } from 'cdktg'

TrustBoundary.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktg.TrustBoundary.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.TrustBoundary.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.TrustBoundary.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.property.type">type</a></code> | <code><a href="#cdktg.TrustBoundaryType">TrustBoundaryType</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.TrustBoundary.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.TrustBoundary.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="cdktg.TrustBoundary.property.type"></a>

```typescript
public readonly type: TrustBoundaryType;
```

- *Type:* <a href="#cdktg.TrustBoundaryType">TrustBoundaryType</a>

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.TrustBoundary.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---


## Structs <a name="Structs" id="Structs"></a>

### AssetProps <a name="AssetProps" id="cdktg.AssetProps"></a>

#### Initializer <a name="Initializer" id="cdktg.AssetProps.Initializer"></a>

```typescript
import { AssetProps } from 'cdktg'

const assetProps: AssetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.AssetProps.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.AssetProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.AssetProps.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.AssetProps.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.AssetProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.AssetProps.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

### AuthorProps <a name="AuthorProps" id="cdktg.AuthorProps"></a>

#### Initializer <a name="Initializer" id="cdktg.AuthorProps.Initializer"></a>

```typescript
import { AuthorProps } from 'cdktg'

const authorProps: AuthorProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.AuthorProps.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.AuthorProps.property.homepage">homepage</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdktg.AuthorProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="cdktg.AuthorProps.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

---

### CIATriadProps <a name="CIATriadProps" id="cdktg.CIATriadProps"></a>

#### Initializer <a name="Initializer" id="cdktg.CIATriadProps.Initializer"></a>

```typescript
import { CIATriadProps } from 'cdktg'

const cIATriadProps: CIATriadProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.CIATriadProps.property.availability">availability</a></code> | <code><a href="#cdktg.Availability">Availability</a></code> | *No description.* |
| <code><a href="#cdktg.CIATriadProps.property.confidentiality">confidentiality</a></code> | <code><a href="#cdktg.Confidentiality">Confidentiality</a></code> | *No description.* |
| <code><a href="#cdktg.CIATriadProps.property.integrity">integrity</a></code> | <code><a href="#cdktg.Integrity">Integrity</a></code> | *No description.* |
| <code><a href="#cdktg.CIATriadProps.property.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `availability`<sup>Required</sup> <a name="availability" id="cdktg.CIATriadProps.property.availability"></a>

```typescript
public readonly availability: Availability;
```

- *Type:* <a href="#cdktg.Availability">Availability</a>

---

##### `confidentiality`<sup>Required</sup> <a name="confidentiality" id="cdktg.CIATriadProps.property.confidentiality"></a>

```typescript
public readonly confidentiality: Confidentiality;
```

- *Type:* <a href="#cdktg.Confidentiality">Confidentiality</a>

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="cdktg.CIATriadProps.property.integrity"></a>

```typescript
public readonly integrity: Integrity;
```

- *Type:* <a href="#cdktg.Integrity">Integrity</a>

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.CIATriadProps.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

### CommunicationOptions <a name="CommunicationOptions" id="cdktg.CommunicationOptions"></a>

#### Initializer <a name="Initializer" id="cdktg.CommunicationOptions.Initializer"></a>

```typescript
import { CommunicationOptions } from 'cdktg'

const communicationOptions: CommunicationOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.CommunicationOptions.property.authentication">authentication</a></code> | <code><a href="#cdktg.Authentication">Authentication</a></code> | *No description.* |
| <code><a href="#cdktg.CommunicationOptions.property.authorization">authorization</a></code> | <code><a href="#cdktg.Authorization">Authorization</a></code> | *No description.* |
| <code><a href="#cdktg.CommunicationOptions.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.CommunicationOptions.property.ipFiltered">ipFiltered</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.CommunicationOptions.property.protocol">protocol</a></code> | <code><a href="#cdktg.Protocol">Protocol</a></code> | *No description.* |
| <code><a href="#cdktg.CommunicationOptions.property.readonly">readonly</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.CommunicationOptions.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.CommunicationOptions.property.vpn">vpn</a></code> | <code>boolean</code> | *No description.* |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="cdktg.CommunicationOptions.property.authentication"></a>

```typescript
public readonly authentication: Authentication;
```

- *Type:* <a href="#cdktg.Authentication">Authentication</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="cdktg.CommunicationOptions.property.authorization"></a>

```typescript
public readonly authorization: Authorization;
```

- *Type:* <a href="#cdktg.Authorization">Authorization</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.CommunicationOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipFiltered`<sup>Required</sup> <a name="ipFiltered" id="cdktg.CommunicationOptions.property.ipFiltered"></a>

```typescript
public readonly ipFiltered: boolean;
```

- *Type:* boolean

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="cdktg.CommunicationOptions.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#cdktg.Protocol">Protocol</a>

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="cdktg.CommunicationOptions.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.CommunicationOptions.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `vpn`<sup>Required</sup> <a name="vpn" id="cdktg.CommunicationOptions.property.vpn"></a>

```typescript
public readonly vpn: boolean;
```

- *Type:* boolean

---

### CommunicationProps <a name="CommunicationProps" id="cdktg.CommunicationProps"></a>

#### Initializer <a name="Initializer" id="cdktg.CommunicationProps.Initializer"></a>

```typescript
import { CommunicationProps } from 'cdktg'

const communicationProps: CommunicationProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.CommunicationProps.property.authentication">authentication</a></code> | <code><a href="#cdktg.Authentication">Authentication</a></code> | *No description.* |
| <code><a href="#cdktg.CommunicationProps.property.authorization">authorization</a></code> | <code><a href="#cdktg.Authorization">Authorization</a></code> | *No description.* |
| <code><a href="#cdktg.CommunicationProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.CommunicationProps.property.ipFiltered">ipFiltered</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.CommunicationProps.property.protocol">protocol</a></code> | <code><a href="#cdktg.Protocol">Protocol</a></code> | *No description.* |
| <code><a href="#cdktg.CommunicationProps.property.readonly">readonly</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.CommunicationProps.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.CommunicationProps.property.vpn">vpn</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.CommunicationProps.property.target">target</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a></code> | *No description.* |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="cdktg.CommunicationProps.property.authentication"></a>

```typescript
public readonly authentication: Authentication;
```

- *Type:* <a href="#cdktg.Authentication">Authentication</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="cdktg.CommunicationProps.property.authorization"></a>

```typescript
public readonly authorization: Authorization;
```

- *Type:* <a href="#cdktg.Authorization">Authorization</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.CommunicationProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ipFiltered`<sup>Required</sup> <a name="ipFiltered" id="cdktg.CommunicationProps.property.ipFiltered"></a>

```typescript
public readonly ipFiltered: boolean;
```

- *Type:* boolean

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="cdktg.CommunicationProps.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#cdktg.Protocol">Protocol</a>

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="cdktg.CommunicationProps.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.CommunicationProps.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `vpn`<sup>Required</sup> <a name="vpn" id="cdktg.CommunicationProps.property.vpn"></a>

```typescript
public readonly vpn: boolean;
```

- *Type:* boolean

---

##### `target`<sup>Required</sup> <a name="target" id="cdktg.CommunicationProps.property.target"></a>

```typescript
public readonly target: TechnicalAsset;
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

### DataAssetProps <a name="DataAssetProps" id="cdktg.DataAssetProps"></a>

#### Initializer <a name="Initializer" id="cdktg.DataAssetProps.Initializer"></a>

```typescript
import { DataAssetProps } from 'cdktg'

const dataAssetProps: DataAssetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.DataAssetProps.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.quantity">quantity</a></code> | <code><a href="#cdktg.Quantity">Quantity</a></code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.owner">owner</a></code> | <code>string</code> | *No description.* |

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.DataAssetProps.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.DataAssetProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.DataAssetProps.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="cdktg.DataAssetProps.property.quantity"></a>

```typescript
public readonly quantity: Quantity;
```

- *Type:* <a href="#cdktg.Quantity">Quantity</a>

---

##### `origin`<sup>Optional</sup> <a name="origin" id="cdktg.DataAssetProps.property.origin"></a>

```typescript
public readonly origin: string;
```

- *Type:* string

---

##### `owner`<sup>Optional</sup> <a name="owner" id="cdktg.DataAssetProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

### ManifestProps <a name="ManifestProps" id="cdktg.ManifestProps"></a>

#### Initializer <a name="Initializer" id="cdktg.ManifestProps.Initializer"></a>

```typescript
import { ManifestProps } from 'cdktg'

const manifestProps: ManifestProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.ManifestProps.property.outdir">outdir</a></code> | <code>string</code> | The directory to output the threadgile model. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdktg.ManifestProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* .

The directory to output the threadgile model.

---

### ModelProps <a name="ModelProps" id="cdktg.ModelProps"></a>

#### Initializer <a name="Initializer" id="cdktg.ModelProps.Initializer"></a>

```typescript
import { ModelProps } from 'cdktg'

const modelProps: ModelProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.ModelProps.property.author">author</a></code> | <code><a href="#cdktg.Author">Author</a></code> | Author of the model. |
| <code><a href="#cdktg.ModelProps.property.businessCriticality">businessCriticality</a></code> | <code><a href="#cdktg.BusinessCriticality">BusinessCriticality</a></code> | Business criticality of the target. |
| <code><a href="#cdktg.ModelProps.property.version">version</a></code> | <code>string</code> | Version of the Threagile toolkit. |
| <code><a href="#cdktg.ModelProps.property.date">date</a></code> | <code>Date</code> | Date of the model. |
| <code><a href="#cdktg.ModelProps.property.title">title</a></code> | <code>string</code> | Title of the model. |

---

##### `author`<sup>Required</sup> <a name="author" id="cdktg.ModelProps.property.author"></a>

```typescript
public readonly author: Author;
```

- *Type:* <a href="#cdktg.Author">Author</a>

Author of the model.

---

##### `businessCriticality`<sup>Required</sup> <a name="businessCriticality" id="cdktg.ModelProps.property.businessCriticality"></a>

```typescript
public readonly businessCriticality: BusinessCriticality;
```

- *Type:* <a href="#cdktg.BusinessCriticality">BusinessCriticality</a>

Business criticality of the target.

---

##### `version`<sup>Required</sup> <a name="version" id="cdktg.ModelProps.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the Threagile toolkit.

---

##### `date`<sup>Optional</sup> <a name="date" id="cdktg.ModelProps.property.date"></a>

```typescript
public readonly date: Date;
```

- *Type:* Date

Date of the model.

---

##### `title`<sup>Optional</sup> <a name="title" id="cdktg.ModelProps.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

Title of the model.

---

### OutOfScopeProps <a name="OutOfScopeProps" id="cdktg.OutOfScopeProps"></a>

#### Initializer <a name="Initializer" id="cdktg.OutOfScopeProps.Initializer"></a>

```typescript
import { OutOfScopeProps } from 'cdktg'

const outOfScopeProps: OutOfScopeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.OutOfScopeProps.property.outOfScope">outOfScope</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.OutOfScopeProps.property.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `outOfScope`<sup>Required</sup> <a name="outOfScope" id="cdktg.OutOfScopeProps.property.outOfScope"></a>

```typescript
public readonly outOfScope: boolean;
```

- *Type:* boolean

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.OutOfScopeProps.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

### ProjectProps <a name="ProjectProps" id="cdktg.ProjectProps"></a>

#### Initializer <a name="Initializer" id="cdktg.ProjectProps.Initializer"></a>

```typescript
import { ProjectProps } from 'cdktg'

const projectProps: ProjectProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.ProjectProps.property.outdir">outdir</a></code> | <code>string</code> | The directory to output the threadgile model. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdktg.ProjectProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* .

The directory to output the threadgile model.

---

### TechnicalAssetProps <a name="TechnicalAssetProps" id="cdktg.TechnicalAssetProps"></a>

#### Initializer <a name="Initializer" id="cdktg.TechnicalAssetProps.Initializer"></a>

```typescript
import { TechnicalAssetProps } from 'cdktg'

const technicalAssetProps: TechnicalAssetProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.TechnicalAssetProps.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.assetType">assetType</a></code> | <code><a href="#cdktg.AssetType">AssetType</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.encryption">encryption</a></code> | <code><a href="#cdktg.Encryption">Encryption</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.humanUse">humanUse</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.internet">internet</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.machine">machine</a></code> | <code><a href="#cdktg.Machine">Machine</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.multiTenant">multiTenant</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.redundant">redundant</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.size">size</a></code> | <code><a href="#cdktg.Size">Size</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.technology">technology</a></code> | <code><a href="#cdktg.Technology">Technology</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.scope">scope</a></code> | <code><a href="#cdktg.Scope">Scope</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.trustBoundary">trustBoundary</a></code> | <code><a href="#cdktg.TrustBoundary">TrustBoundary</a></code> | *No description.* |

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.TechnicalAssetProps.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.TechnicalAssetProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.TechnicalAssetProps.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `assetType`<sup>Required</sup> <a name="assetType" id="cdktg.TechnicalAssetProps.property.assetType"></a>

```typescript
public readonly assetType: AssetType;
```

- *Type:* <a href="#cdktg.AssetType">AssetType</a>

---

##### `encryption`<sup>Required</sup> <a name="encryption" id="cdktg.TechnicalAssetProps.property.encryption"></a>

```typescript
public readonly encryption: Encryption;
```

- *Type:* <a href="#cdktg.Encryption">Encryption</a>

---

##### `humanUse`<sup>Required</sup> <a name="humanUse" id="cdktg.TechnicalAssetProps.property.humanUse"></a>

```typescript
public readonly humanUse: boolean;
```

- *Type:* boolean

---

##### `internet`<sup>Required</sup> <a name="internet" id="cdktg.TechnicalAssetProps.property.internet"></a>

```typescript
public readonly internet: boolean;
```

- *Type:* boolean

---

##### `machine`<sup>Required</sup> <a name="machine" id="cdktg.TechnicalAssetProps.property.machine"></a>

```typescript
public readonly machine: Machine;
```

- *Type:* <a href="#cdktg.Machine">Machine</a>

---

##### `multiTenant`<sup>Required</sup> <a name="multiTenant" id="cdktg.TechnicalAssetProps.property.multiTenant"></a>

```typescript
public readonly multiTenant: boolean;
```

- *Type:* boolean

---

##### `owner`<sup>Required</sup> <a name="owner" id="cdktg.TechnicalAssetProps.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `redundant`<sup>Required</sup> <a name="redundant" id="cdktg.TechnicalAssetProps.property.redundant"></a>

```typescript
public readonly redundant: boolean;
```

- *Type:* boolean

---

##### `size`<sup>Required</sup> <a name="size" id="cdktg.TechnicalAssetProps.property.size"></a>

```typescript
public readonly size: Size;
```

- *Type:* <a href="#cdktg.Size">Size</a>

---

##### `technology`<sup>Required</sup> <a name="technology" id="cdktg.TechnicalAssetProps.property.technology"></a>

```typescript
public readonly technology: Technology;
```

- *Type:* <a href="#cdktg.Technology">Technology</a>

---

##### `scope`<sup>Optional</sup> <a name="scope" id="cdktg.TechnicalAssetProps.property.scope"></a>

```typescript
public readonly scope: Scope;
```

- *Type:* <a href="#cdktg.Scope">Scope</a>

---

##### `trustBoundary`<sup>Optional</sup> <a name="trustBoundary" id="cdktg.TechnicalAssetProps.property.trustBoundary"></a>

```typescript
public readonly trustBoundary: TrustBoundary;
```

- *Type:* <a href="#cdktg.TrustBoundary">TrustBoundary</a>

---

### TrustBoundaryProps <a name="TrustBoundaryProps" id="cdktg.TrustBoundaryProps"></a>

#### Initializer <a name="Initializer" id="cdktg.TrustBoundaryProps.Initializer"></a>

```typescript
import { TrustBoundaryProps } from 'cdktg'

const trustBoundaryProps: TrustBoundaryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.TrustBoundaryProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TrustBoundaryProps.property.type">type</a></code> | <code><a href="#cdktg.TrustBoundaryType">TrustBoundaryType</a></code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.TrustBoundaryProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="cdktg.TrustBoundaryProps.property.type"></a>

```typescript
public readonly type: TrustBoundaryType;
```

- *Type:* <a href="#cdktg.TrustBoundaryType">TrustBoundaryType</a>

---

## Classes <a name="Classes" id="Classes"></a>

### Author <a name="Author" id="cdktg.Author"></a>

#### Initializers <a name="Initializers" id="cdktg.Author.Initializer"></a>

```typescript
import { Author } from 'cdktg'

new Author(props: AuthorProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Author.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.AuthorProps">AuthorProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.Author.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.AuthorProps">AuthorProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Author.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Author.property.homepage">homepage</a></code> | <code>string</code> | *No description.* |

---

##### `name`<sup>Required</sup> <a name="name" id="cdktg.Author.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="cdktg.Author.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

---


### CIATriad <a name="CIATriad" id="cdktg.CIATriad"></a>

#### Initializers <a name="Initializers" id="cdktg.CIATriad.Initializer"></a>

```typescript
import { CIATriad } from 'cdktg'

new CIATriad(props: CIATriadProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.CIATriad.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.CIATriadProps">CIATriadProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.CIATriad.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.CIATriadProps">CIATriadProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.CIATriad.property.availability">availability</a></code> | <code><a href="#cdktg.Availability">Availability</a></code> | *No description.* |
| <code><a href="#cdktg.CIATriad.property.confidentiality">confidentiality</a></code> | <code><a href="#cdktg.Confidentiality">Confidentiality</a></code> | *No description.* |
| <code><a href="#cdktg.CIATriad.property.integrity">integrity</a></code> | <code><a href="#cdktg.Integrity">Integrity</a></code> | *No description.* |
| <code><a href="#cdktg.CIATriad.property.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `availability`<sup>Required</sup> <a name="availability" id="cdktg.CIATriad.property.availability"></a>

```typescript
public readonly availability: Availability;
```

- *Type:* <a href="#cdktg.Availability">Availability</a>

---

##### `confidentiality`<sup>Required</sup> <a name="confidentiality" id="cdktg.CIATriad.property.confidentiality"></a>

```typescript
public readonly confidentiality: Confidentiality;
```

- *Type:* <a href="#cdktg.Confidentiality">Confidentiality</a>

---

##### `integrity`<sup>Required</sup> <a name="integrity" id="cdktg.CIATriad.property.integrity"></a>

```typescript
public readonly integrity: Integrity;
```

- *Type:* <a href="#cdktg.Integrity">Integrity</a>

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.CIATriad.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---


### Communication <a name="Communication" id="cdktg.Communication"></a>

#### Initializers <a name="Initializers" id="cdktg.Communication.Initializer"></a>

```typescript
import { Communication } from 'cdktg'

new Communication(id: string, props: CommunicationProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Communication.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Communication.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.CommunicationProps">CommunicationProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.Communication.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.Communication.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.CommunicationProps">CommunicationProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Communication.received">received</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.sent">sent</a></code> | *No description.* |

---

##### `received` <a name="received" id="cdktg.Communication.received"></a>

```typescript
public received(assets: DataAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.Communication.received.parameter.assets"></a>

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---

##### `sent` <a name="sent" id="cdktg.Communication.sent"></a>

```typescript
public sent(assets: DataAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.Communication.sent.parameter.assets"></a>

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Communication.property.authentication">authentication</a></code> | <code><a href="#cdktg.Authentication">Authentication</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.property.authorization">authorization</a></code> | <code><a href="#cdktg.Authorization">Authorization</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Communication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Communication.property.ipFiltered">ipFiltered</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.Communication.property.protocol">protocol</a></code> | <code><a href="#cdktg.Protocol">Protocol</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.property.readonly">readonly</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.Communication.property.target">target</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.property.vpn">vpn</a></code> | <code>boolean</code> | *No description.* |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="cdktg.Communication.property.authentication"></a>

```typescript
public readonly authentication: Authentication;
```

- *Type:* <a href="#cdktg.Authentication">Authentication</a>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="cdktg.Communication.property.authorization"></a>

```typescript
public readonly authorization: Authorization;
```

- *Type:* <a href="#cdktg.Authorization">Authorization</a>

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.Communication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.Communication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ipFiltered`<sup>Required</sup> <a name="ipFiltered" id="cdktg.Communication.property.ipFiltered"></a>

```typescript
public readonly ipFiltered: boolean;
```

- *Type:* boolean

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="cdktg.Communication.property.protocol"></a>

```typescript
public readonly protocol: Protocol;
```

- *Type:* <a href="#cdktg.Protocol">Protocol</a>

---

##### `readonly`<sup>Required</sup> <a name="readonly" id="cdktg.Communication.property.readonly"></a>

```typescript
public readonly readonly: boolean;
```

- *Type:* boolean

---

##### `target`<sup>Required</sup> <a name="target" id="cdktg.Communication.property.target"></a>

```typescript
public readonly target: TechnicalAsset;
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.Communication.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `vpn`<sup>Required</sup> <a name="vpn" id="cdktg.Communication.property.vpn"></a>

```typescript
public readonly vpn: boolean;
```

- *Type:* boolean

---


### InScope <a name="InScope" id="cdktg.InScope"></a>

#### Initializers <a name="Initializers" id="cdktg.InScope.Initializer"></a>

```typescript
import { InScope } from 'cdktg'

new InScope(justification?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.InScope.Initializer.parameter.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.InScope.Initializer.parameter.justification"></a>

- *Type:* string

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.InScope.property.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.InScope.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---


### Manifest <a name="Manifest" id="cdktg.Manifest"></a>

#### Initializers <a name="Initializers" id="cdktg.Manifest.Initializer"></a>

```typescript
import { Manifest } from 'cdktg'

new Manifest(props?: ManifestProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Manifest.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.ManifestProps">ManifestProps</a></code> | *No description.* |

---

##### `props`<sup>Optional</sup> <a name="props" id="cdktg.Manifest.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.ManifestProps">ManifestProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Manifest.addModel">addModel</a></code> | *No description.* |
| <code><a href="#cdktg.Manifest.save">save</a></code> | *No description.* |

---

##### `addModel` <a name="addModel" id="cdktg.Manifest.addModel"></a>

```typescript
public addModel(title: string, filePath: string): void
```

###### `title`<sup>Required</sup> <a name="title" id="cdktg.Manifest.addModel.parameter.title"></a>

- *Type:* string

---

###### `filePath`<sup>Required</sup> <a name="filePath" id="cdktg.Manifest.addModel.parameter.filePath"></a>

- *Type:* string

---

##### `save` <a name="save" id="cdktg.Manifest.save"></a>

```typescript
public save(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Manifest.fromFile">fromFile</a></code> | *No description.* |

---

##### `fromFile` <a name="fromFile" id="cdktg.Manifest.fromFile"></a>

```typescript
import { Manifest } from 'cdktg'

Manifest.fromFile(dir: string)
```

###### `dir`<sup>Required</sup> <a name="dir" id="cdktg.Manifest.fromFile.parameter.dir"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Manifest.property.data">data</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#cdktg.Manifest.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which models will be synthesized. |

---

##### `data`<sup>Required</sup> <a name="data" id="cdktg.Manifest.property.data"></a>

```typescript
public readonly data: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdktg.Manifest.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The output directory into which models will be synthesized.

---


### OutOfScope <a name="OutOfScope" id="cdktg.OutOfScope"></a>

#### Initializers <a name="Initializers" id="cdktg.OutOfScope.Initializer"></a>

```typescript
import { OutOfScope } from 'cdktg'

new OutOfScope(justification?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.OutOfScope.Initializer.parameter.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.OutOfScope.Initializer.parameter.justification"></a>

- *Type:* string

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.OutOfScope.property.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.OutOfScope.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---


### Scope <a name="Scope" id="cdktg.Scope"></a>

#### Initializers <a name="Initializers" id="cdktg.Scope.Initializer"></a>

```typescript
import { Scope } from 'cdktg'

new Scope(justification?: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Scope.Initializer.parameter.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.Scope.Initializer.parameter.justification"></a>

- *Type:* string

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Scope.property.justification">justification</a></code> | <code>string</code> | *No description.* |

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.Scope.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---



## Enums <a name="Enums" id="Enums"></a>

### AssetType <a name="AssetType" id="cdktg.AssetType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.AssetType.EXTERNAL_ENTITY">EXTERNAL_ENTITY</a></code> | *No description.* |
| <code><a href="#cdktg.AssetType.PROCESS">PROCESS</a></code> | *No description.* |
| <code><a href="#cdktg.AssetType.DATASTORE">DATASTORE</a></code> | *No description.* |

---

##### `EXTERNAL_ENTITY` <a name="EXTERNAL_ENTITY" id="cdktg.AssetType.EXTERNAL_ENTITY"></a>

---


##### `PROCESS` <a name="PROCESS" id="cdktg.AssetType.PROCESS"></a>

---


##### `DATASTORE` <a name="DATASTORE" id="cdktg.AssetType.DATASTORE"></a>

---


### Authentication <a name="Authentication" id="cdktg.Authentication"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Authentication.NONE">NONE</a></code> | *No description.* |
| <code><a href="#cdktg.Authentication.CREDENTIALS">CREDENTIALS</a></code> | *No description.* |
| <code><a href="#cdktg.Authentication.SESSION_ID">SESSION_ID</a></code> | *No description.* |
| <code><a href="#cdktg.Authentication.TOKEN">TOKEN</a></code> | *No description.* |
| <code><a href="#cdktg.Authentication.CLIENT_CERTIFICATE">CLIENT_CERTIFICATE</a></code> | *No description.* |
| <code><a href="#cdktg.Authentication.TWO_FACTOR">TWO_FACTOR</a></code> | *No description.* |
| <code><a href="#cdktg.Authentication.EXTERNALIZED">EXTERNALIZED</a></code> | *No description.* |

---

##### `NONE` <a name="NONE" id="cdktg.Authentication.NONE"></a>

---


##### `CREDENTIALS` <a name="CREDENTIALS" id="cdktg.Authentication.CREDENTIALS"></a>

---


##### `SESSION_ID` <a name="SESSION_ID" id="cdktg.Authentication.SESSION_ID"></a>

---


##### `TOKEN` <a name="TOKEN" id="cdktg.Authentication.TOKEN"></a>

---


##### `CLIENT_CERTIFICATE` <a name="CLIENT_CERTIFICATE" id="cdktg.Authentication.CLIENT_CERTIFICATE"></a>

---


##### `TWO_FACTOR` <a name="TWO_FACTOR" id="cdktg.Authentication.TWO_FACTOR"></a>

---


##### `EXTERNALIZED` <a name="EXTERNALIZED" id="cdktg.Authentication.EXTERNALIZED"></a>

---


### Authorization <a name="Authorization" id="cdktg.Authorization"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Authorization.NONE">NONE</a></code> | *No description.* |
| <code><a href="#cdktg.Authorization.TECHNICAL_USER">TECHNICAL_USER</a></code> | *No description.* |
| <code><a href="#cdktg.Authorization.ENDUSER_IDENTITY_PROPAGATION">ENDUSER_IDENTITY_PROPAGATION</a></code> | *No description.* |

---

##### `NONE` <a name="NONE" id="cdktg.Authorization.NONE"></a>

---


##### `TECHNICAL_USER` <a name="TECHNICAL_USER" id="cdktg.Authorization.TECHNICAL_USER"></a>

---


##### `ENDUSER_IDENTITY_PROPAGATION` <a name="ENDUSER_IDENTITY_PROPAGATION" id="cdktg.Authorization.ENDUSER_IDENTITY_PROPAGATION"></a>

---


### Availability <a name="Availability" id="cdktg.Availability"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Availability.ARCHIVE">ARCHIVE</a></code> | *No description.* |
| <code><a href="#cdktg.Availability.OPERATIONAL">OPERATIONAL</a></code> | *No description.* |
| <code><a href="#cdktg.Availability.IMPORTANT">IMPORTANT</a></code> | *No description.* |
| <code><a href="#cdktg.Availability.CRITICAL">CRITICAL</a></code> | *No description.* |
| <code><a href="#cdktg.Availability.MISSION_CRITICAL">MISSION_CRITICAL</a></code> | *No description.* |

---

##### `ARCHIVE` <a name="ARCHIVE" id="cdktg.Availability.ARCHIVE"></a>

---


##### `OPERATIONAL` <a name="OPERATIONAL" id="cdktg.Availability.OPERATIONAL"></a>

---


##### `IMPORTANT` <a name="IMPORTANT" id="cdktg.Availability.IMPORTANT"></a>

---


##### `CRITICAL` <a name="CRITICAL" id="cdktg.Availability.CRITICAL"></a>

---


##### `MISSION_CRITICAL` <a name="MISSION_CRITICAL" id="cdktg.Availability.MISSION_CRITICAL"></a>

---


### BusinessCriticality <a name="BusinessCriticality" id="cdktg.BusinessCriticality"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.BusinessCriticality.ARCHIVE">ARCHIVE</a></code> | *No description.* |
| <code><a href="#cdktg.BusinessCriticality.OPERATIONAL">OPERATIONAL</a></code> | *No description.* |
| <code><a href="#cdktg.BusinessCriticality.IMPORTANT">IMPORTANT</a></code> | *No description.* |
| <code><a href="#cdktg.BusinessCriticality.CRITICAL">CRITICAL</a></code> | *No description.* |
| <code><a href="#cdktg.BusinessCriticality.MISSION_CRITICAL">MISSION_CRITICAL</a></code> | *No description.* |

---

##### `ARCHIVE` <a name="ARCHIVE" id="cdktg.BusinessCriticality.ARCHIVE"></a>

---


##### `OPERATIONAL` <a name="OPERATIONAL" id="cdktg.BusinessCriticality.OPERATIONAL"></a>

---


##### `IMPORTANT` <a name="IMPORTANT" id="cdktg.BusinessCriticality.IMPORTANT"></a>

---


##### `CRITICAL` <a name="CRITICAL" id="cdktg.BusinessCriticality.CRITICAL"></a>

---


##### `MISSION_CRITICAL` <a name="MISSION_CRITICAL" id="cdktg.BusinessCriticality.MISSION_CRITICAL"></a>

---


### Confidentiality <a name="Confidentiality" id="cdktg.Confidentiality"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Confidentiality.PUBLIC">PUBLIC</a></code> | *No description.* |
| <code><a href="#cdktg.Confidentiality.INTERNAL">INTERNAL</a></code> | *No description.* |
| <code><a href="#cdktg.Confidentiality.RESTRICTED">RESTRICTED</a></code> | *No description.* |
| <code><a href="#cdktg.Confidentiality.CONFIDENTIAL">CONFIDENTIAL</a></code> | *No description.* |
| <code><a href="#cdktg.Confidentiality.STRICTLY_CONFIDENTIAL">STRICTLY_CONFIDENTIAL</a></code> | *No description.* |

---

##### `PUBLIC` <a name="PUBLIC" id="cdktg.Confidentiality.PUBLIC"></a>

---


##### `INTERNAL` <a name="INTERNAL" id="cdktg.Confidentiality.INTERNAL"></a>

---


##### `RESTRICTED` <a name="RESTRICTED" id="cdktg.Confidentiality.RESTRICTED"></a>

---


##### `CONFIDENTIAL` <a name="CONFIDENTIAL" id="cdktg.Confidentiality.CONFIDENTIAL"></a>

---


##### `STRICTLY_CONFIDENTIAL` <a name="STRICTLY_CONFIDENTIAL" id="cdktg.Confidentiality.STRICTLY_CONFIDENTIAL"></a>

---


### DataFormat <a name="DataFormat" id="cdktg.DataFormat"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.DataFormat.JSON">JSON</a></code> | *No description.* |
| <code><a href="#cdktg.DataFormat.XML">XML</a></code> | *No description.* |
| <code><a href="#cdktg.DataFormat.SERIALIZATION">SERIALIZATION</a></code> | *No description.* |
| <code><a href="#cdktg.DataFormat.FILE">FILE</a></code> | *No description.* |
| <code><a href="#cdktg.DataFormat.CSV">CSV</a></code> | *No description.* |

---

##### `JSON` <a name="JSON" id="cdktg.DataFormat.JSON"></a>

---


##### `XML` <a name="XML" id="cdktg.DataFormat.XML"></a>

---


##### `SERIALIZATION` <a name="SERIALIZATION" id="cdktg.DataFormat.SERIALIZATION"></a>

---


##### `FILE` <a name="FILE" id="cdktg.DataFormat.FILE"></a>

---


##### `CSV` <a name="CSV" id="cdktg.DataFormat.CSV"></a>

---


### Encryption <a name="Encryption" id="cdktg.Encryption"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Encryption.NONE">NONE</a></code> | *No description.* |
| <code><a href="#cdktg.Encryption.TRANSPARENT">TRANSPARENT</a></code> | *No description.* |
| <code><a href="#cdktg.Encryption.SYMMETRIC_SHARED_KEY">SYMMETRIC_SHARED_KEY</a></code> | *No description.* |
| <code><a href="#cdktg.Encryption.ASYMMETRIC_SHARED_KEY">ASYMMETRIC_SHARED_KEY</a></code> | *No description.* |
| <code><a href="#cdktg.Encryption.ENDUSER_INDIVIDUAL_KEY">ENDUSER_INDIVIDUAL_KEY</a></code> | *No description.* |

---

##### `NONE` <a name="NONE" id="cdktg.Encryption.NONE"></a>

---


##### `TRANSPARENT` <a name="TRANSPARENT" id="cdktg.Encryption.TRANSPARENT"></a>

---


##### `SYMMETRIC_SHARED_KEY` <a name="SYMMETRIC_SHARED_KEY" id="cdktg.Encryption.SYMMETRIC_SHARED_KEY"></a>

---


##### `ASYMMETRIC_SHARED_KEY` <a name="ASYMMETRIC_SHARED_KEY" id="cdktg.Encryption.ASYMMETRIC_SHARED_KEY"></a>

---


##### `ENDUSER_INDIVIDUAL_KEY` <a name="ENDUSER_INDIVIDUAL_KEY" id="cdktg.Encryption.ENDUSER_INDIVIDUAL_KEY"></a>

---


### Integrity <a name="Integrity" id="cdktg.Integrity"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Integrity.ARCHIVE">ARCHIVE</a></code> | *No description.* |
| <code><a href="#cdktg.Integrity.OPERATIONAL">OPERATIONAL</a></code> | *No description.* |
| <code><a href="#cdktg.Integrity.IMPORTANT">IMPORTANT</a></code> | *No description.* |
| <code><a href="#cdktg.Integrity.CRITICAL">CRITICAL</a></code> | *No description.* |
| <code><a href="#cdktg.Integrity.MISSION_CRITICAL">MISSION_CRITICAL</a></code> | *No description.* |

---

##### `ARCHIVE` <a name="ARCHIVE" id="cdktg.Integrity.ARCHIVE"></a>

---


##### `OPERATIONAL` <a name="OPERATIONAL" id="cdktg.Integrity.OPERATIONAL"></a>

---


##### `IMPORTANT` <a name="IMPORTANT" id="cdktg.Integrity.IMPORTANT"></a>

---


##### `CRITICAL` <a name="CRITICAL" id="cdktg.Integrity.CRITICAL"></a>

---


##### `MISSION_CRITICAL` <a name="MISSION_CRITICAL" id="cdktg.Integrity.MISSION_CRITICAL"></a>

---


### Machine <a name="Machine" id="cdktg.Machine"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Machine.PHYSICAL">PHYSICAL</a></code> | *No description.* |
| <code><a href="#cdktg.Machine.VIRTUAL">VIRTUAL</a></code> | *No description.* |
| <code><a href="#cdktg.Machine.CONTAINER">CONTAINER</a></code> | *No description.* |
| <code><a href="#cdktg.Machine.SERVERLESS">SERVERLESS</a></code> | *No description.* |

---

##### `PHYSICAL` <a name="PHYSICAL" id="cdktg.Machine.PHYSICAL"></a>

---


##### `VIRTUAL` <a name="VIRTUAL" id="cdktg.Machine.VIRTUAL"></a>

---


##### `CONTAINER` <a name="CONTAINER" id="cdktg.Machine.CONTAINER"></a>

---


##### `SERVERLESS` <a name="SERVERLESS" id="cdktg.Machine.SERVERLESS"></a>

---


### Protocol <a name="Protocol" id="cdktg.Protocol"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Protocol.UNKNOEN">UNKNOEN</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.HTTP">HTTP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.HTTPS">HTTPS</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.WS">WS</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.WSS">WSS</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.REVERSE_PROXY_WEB_PROTOCOL">REVERSE_PROXY_WEB_PROTOCOL</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.REVERSE_PROXY_WEB_PROTOCOL_ENCRYPTED">REVERSE_PROXY_WEB_PROTOCOL_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.MQTT">MQTT</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.JDBC">JDBC</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.JDBC_ENCRYPTED">JDBC_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.ODBC">ODBC</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.ODBC_ENCRYPTED">ODBC_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SQL_ACCESS_PROTOCOL">SQL_ACCESS_PROTOCOL</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SQL_ACCESS_PROTOCOL_ENCRYPTED">SQL_ACCESS_PROTOCOL_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.NOSQL_ACCESS_PROTOCOL">NOSQL_ACCESS_PROTOCOL</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.NOSQL_ACCESS_PROTOCOL_ENCRYPTED">NOSQL_ACCESS_PROTOCOL_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.BINARY">BINARY</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.BINARY_ENCRYPTED">BINARY_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.TEXT">TEXT</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.TEXT_ENCRYPTED">TEXT_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SSH">SSH</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SSH_TUNNEL">SSH_TUNNEL</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SMTP">SMTP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SMTP_ENCRYPTED">SMTP_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.POP3">POP3</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.POP3_ENCRYPTED">POP3_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.IMAP">IMAP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.IMAP_ENCRYPTED">IMAP_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.FTP">FTP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.FTPS">FTPS</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SFTP">SFTP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SCP">SCP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.LDAP">LDAP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.LDAPS">LDAPS</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.JMS">JMS</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.NFS">NFS</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SMB">SMB</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.SMB_ENCRYPTED">SMB_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.LOCAL_FILE_ACCESS">LOCAL_FILE_ACCESS</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.NRPE">NRPE</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.XMPP">XMPP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.IIOP">IIOP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.IIOP_ENCRYPTED">IIOP_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.JRMP">JRMP</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.JRMP_ENCRYPTED">JRMP_ENCRYPTED</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.IN_PROCESS_LIBRARY_CALL">IN_PROCESS_LIBRARY_CALL</a></code> | *No description.* |
| <code><a href="#cdktg.Protocol.CONTAINER_SPAWNING">CONTAINER_SPAWNING</a></code> | *No description.* |

---

##### `UNKNOEN` <a name="UNKNOEN" id="cdktg.Protocol.UNKNOEN"></a>

---


##### `HTTP` <a name="HTTP" id="cdktg.Protocol.HTTP"></a>

---


##### `HTTPS` <a name="HTTPS" id="cdktg.Protocol.HTTPS"></a>

---


##### `WS` <a name="WS" id="cdktg.Protocol.WS"></a>

---


##### `WSS` <a name="WSS" id="cdktg.Protocol.WSS"></a>

---


##### `REVERSE_PROXY_WEB_PROTOCOL` <a name="REVERSE_PROXY_WEB_PROTOCOL" id="cdktg.Protocol.REVERSE_PROXY_WEB_PROTOCOL"></a>

---


##### `REVERSE_PROXY_WEB_PROTOCOL_ENCRYPTED` <a name="REVERSE_PROXY_WEB_PROTOCOL_ENCRYPTED" id="cdktg.Protocol.REVERSE_PROXY_WEB_PROTOCOL_ENCRYPTED"></a>

---


##### `MQTT` <a name="MQTT" id="cdktg.Protocol.MQTT"></a>

---


##### `JDBC` <a name="JDBC" id="cdktg.Protocol.JDBC"></a>

---


##### `JDBC_ENCRYPTED` <a name="JDBC_ENCRYPTED" id="cdktg.Protocol.JDBC_ENCRYPTED"></a>

---


##### `ODBC` <a name="ODBC" id="cdktg.Protocol.ODBC"></a>

---


##### `ODBC_ENCRYPTED` <a name="ODBC_ENCRYPTED" id="cdktg.Protocol.ODBC_ENCRYPTED"></a>

---


##### `SQL_ACCESS_PROTOCOL` <a name="SQL_ACCESS_PROTOCOL" id="cdktg.Protocol.SQL_ACCESS_PROTOCOL"></a>

---


##### `SQL_ACCESS_PROTOCOL_ENCRYPTED` <a name="SQL_ACCESS_PROTOCOL_ENCRYPTED" id="cdktg.Protocol.SQL_ACCESS_PROTOCOL_ENCRYPTED"></a>

---


##### `NOSQL_ACCESS_PROTOCOL` <a name="NOSQL_ACCESS_PROTOCOL" id="cdktg.Protocol.NOSQL_ACCESS_PROTOCOL"></a>

---


##### `NOSQL_ACCESS_PROTOCOL_ENCRYPTED` <a name="NOSQL_ACCESS_PROTOCOL_ENCRYPTED" id="cdktg.Protocol.NOSQL_ACCESS_PROTOCOL_ENCRYPTED"></a>

---


##### `BINARY` <a name="BINARY" id="cdktg.Protocol.BINARY"></a>

---


##### `BINARY_ENCRYPTED` <a name="BINARY_ENCRYPTED" id="cdktg.Protocol.BINARY_ENCRYPTED"></a>

---


##### `TEXT` <a name="TEXT" id="cdktg.Protocol.TEXT"></a>

---


##### `TEXT_ENCRYPTED` <a name="TEXT_ENCRYPTED" id="cdktg.Protocol.TEXT_ENCRYPTED"></a>

---


##### `SSH` <a name="SSH" id="cdktg.Protocol.SSH"></a>

---


##### `SSH_TUNNEL` <a name="SSH_TUNNEL" id="cdktg.Protocol.SSH_TUNNEL"></a>

---


##### `SMTP` <a name="SMTP" id="cdktg.Protocol.SMTP"></a>

---


##### `SMTP_ENCRYPTED` <a name="SMTP_ENCRYPTED" id="cdktg.Protocol.SMTP_ENCRYPTED"></a>

---


##### `POP3` <a name="POP3" id="cdktg.Protocol.POP3"></a>

---


##### `POP3_ENCRYPTED` <a name="POP3_ENCRYPTED" id="cdktg.Protocol.POP3_ENCRYPTED"></a>

---


##### `IMAP` <a name="IMAP" id="cdktg.Protocol.IMAP"></a>

---


##### `IMAP_ENCRYPTED` <a name="IMAP_ENCRYPTED" id="cdktg.Protocol.IMAP_ENCRYPTED"></a>

---


##### `FTP` <a name="FTP" id="cdktg.Protocol.FTP"></a>

---


##### `FTPS` <a name="FTPS" id="cdktg.Protocol.FTPS"></a>

---


##### `SFTP` <a name="SFTP" id="cdktg.Protocol.SFTP"></a>

---


##### `SCP` <a name="SCP" id="cdktg.Protocol.SCP"></a>

---


##### `LDAP` <a name="LDAP" id="cdktg.Protocol.LDAP"></a>

---


##### `LDAPS` <a name="LDAPS" id="cdktg.Protocol.LDAPS"></a>

---


##### `JMS` <a name="JMS" id="cdktg.Protocol.JMS"></a>

---


##### `NFS` <a name="NFS" id="cdktg.Protocol.NFS"></a>

---


##### `SMB` <a name="SMB" id="cdktg.Protocol.SMB"></a>

---


##### `SMB_ENCRYPTED` <a name="SMB_ENCRYPTED" id="cdktg.Protocol.SMB_ENCRYPTED"></a>

---


##### `LOCAL_FILE_ACCESS` <a name="LOCAL_FILE_ACCESS" id="cdktg.Protocol.LOCAL_FILE_ACCESS"></a>

---


##### `NRPE` <a name="NRPE" id="cdktg.Protocol.NRPE"></a>

---


##### `XMPP` <a name="XMPP" id="cdktg.Protocol.XMPP"></a>

---


##### `IIOP` <a name="IIOP" id="cdktg.Protocol.IIOP"></a>

---


##### `IIOP_ENCRYPTED` <a name="IIOP_ENCRYPTED" id="cdktg.Protocol.IIOP_ENCRYPTED"></a>

---


##### `JRMP` <a name="JRMP" id="cdktg.Protocol.JRMP"></a>

---


##### `JRMP_ENCRYPTED` <a name="JRMP_ENCRYPTED" id="cdktg.Protocol.JRMP_ENCRYPTED"></a>

---


##### `IN_PROCESS_LIBRARY_CALL` <a name="IN_PROCESS_LIBRARY_CALL" id="cdktg.Protocol.IN_PROCESS_LIBRARY_CALL"></a>

---


##### `CONTAINER_SPAWNING` <a name="CONTAINER_SPAWNING" id="cdktg.Protocol.CONTAINER_SPAWNING"></a>

---


### Quantity <a name="Quantity" id="cdktg.Quantity"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Quantity.VERY_FEW">VERY_FEW</a></code> | *No description.* |
| <code><a href="#cdktg.Quantity.FEW">FEW</a></code> | *No description.* |
| <code><a href="#cdktg.Quantity.MANY">MANY</a></code> | *No description.* |
| <code><a href="#cdktg.Quantity.VERY_MANY">VERY_MANY</a></code> | *No description.* |

---

##### `VERY_FEW` <a name="VERY_FEW" id="cdktg.Quantity.VERY_FEW"></a>

---


##### `FEW` <a name="FEW" id="cdktg.Quantity.FEW"></a>

---


##### `MANY` <a name="MANY" id="cdktg.Quantity.MANY"></a>

---


##### `VERY_MANY` <a name="VERY_MANY" id="cdktg.Quantity.VERY_MANY"></a>

---


### Size <a name="Size" id="cdktg.Size"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Size.SYSTEM">SYSTEM</a></code> | *No description.* |
| <code><a href="#cdktg.Size.SERVICE">SERVICE</a></code> | *No description.* |
| <code><a href="#cdktg.Size.APPLICATION">APPLICATION</a></code> | *No description.* |
| <code><a href="#cdktg.Size.COMPONENT">COMPONENT</a></code> | *No description.* |

---

##### `SYSTEM` <a name="SYSTEM" id="cdktg.Size.SYSTEM"></a>

---


##### `SERVICE` <a name="SERVICE" id="cdktg.Size.SERVICE"></a>

---


##### `APPLICATION` <a name="APPLICATION" id="cdktg.Size.APPLICATION"></a>

---


##### `COMPONENT` <a name="COMPONENT" id="cdktg.Size.COMPONENT"></a>

---


### Technology <a name="Technology" id="cdktg.Technology"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Technology.UNKNOWN">UNKNOWN</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.CLIENT_SYSTEM">CLIENT_SYSTEM</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.BROWSER">BROWSER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.DESKTOP">DESKTOP</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.MOBILE_APP">MOBILE_APP</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.DEVOPS_CLIENT">DEVOPS_CLIENT</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.WEB_SERVER">WEB_SERVER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.WEB_APPLICATION">WEB_APPLICATION</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.APPLICATION_SERVER">APPLICATION_SERVER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.DATABASE">DATABASE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.FILE_SERVER">FILE_SERVER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.LOCAL_FILE_SERVER">LOCAL_FILE_SERVER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.ERP">ERP</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.CMS">CMS</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.WEB_SERVICE_REST">WEB_SERVICE_REST</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.WEB_SERVICE_SOAP">WEB_SERVICE_SOAP</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.EJB">EJB</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.SEARCH_INDEX">SEARCH_INDEX</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.SEARCH_ENGINE">SEARCH_ENGINE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.SERVICE_REGISTRY">SERVICE_REGISTRY</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.REVERSE_PROXY">REVERSE_PROXY</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.LOAD_BALANCER">LOAD_BALANCER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.BUILD_PIPELINE">BUILD_PIPELINE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.SOURCECODE_REPOSITORY">SOURCECODE_REPOSITORY</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.ARTIFACT_REGISTRY">ARTIFACT_REGISTRY</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.CODE_INSPECTION_PLATFORM">CODE_INSPECTION_PLATFORM</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.MONITORING">MONITORING</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.LDAP_SERVER">LDAP_SERVER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.CONTAINER_PLATFORM">CONTAINER_PLATFORM</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.BATCH_PROCESSING">BATCH_PROCESSING</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.EVENT_LISTENER">EVENT_LISTENER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.IDENTITIY_PROVIDER">IDENTITIY_PROVIDER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.IDENTITY_STORE_LDAP">IDENTITY_STORE_LDAP</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.IDENTITY_STORE_DATABASE">IDENTITY_STORE_DATABASE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.TOOL">TOOL</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.CLI">CLI</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.TASK">TASK</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.FUNCTION">FUNCTION</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.GATEWAY">GATEWAY</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.IOT_DEVICE">IOT_DEVICE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.MESSAGE_QUEUE">MESSAGE_QUEUE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.STREAM_PROCESSING">STREAM_PROCESSING</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.SERVICE_MESH">SERVICE_MESH</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.DATA_LAKE">DATA_LAKE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.REPORT_ENGINE">REPORT_ENGINE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.AI">AI</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.MAIL_SERVER">MAIL_SERVER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.VAULT">VAULT</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.HASM">HASM</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.WAF">WAF</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.IDS">IDS</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.IPS">IPS</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.SCHEDULER">SCHEDULER</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.MAINFRAME">MAINFRAME</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.BLOCK_STORAGE">BLOCK_STORAGE</a></code> | *No description.* |
| <code><a href="#cdktg.Technology.LIBRARY">LIBRARY</a></code> | *No description.* |

---

##### `UNKNOWN` <a name="UNKNOWN" id="cdktg.Technology.UNKNOWN"></a>

---


##### `CLIENT_SYSTEM` <a name="CLIENT_SYSTEM" id="cdktg.Technology.CLIENT_SYSTEM"></a>

---


##### `BROWSER` <a name="BROWSER" id="cdktg.Technology.BROWSER"></a>

---


##### `DESKTOP` <a name="DESKTOP" id="cdktg.Technology.DESKTOP"></a>

---


##### `MOBILE_APP` <a name="MOBILE_APP" id="cdktg.Technology.MOBILE_APP"></a>

---


##### `DEVOPS_CLIENT` <a name="DEVOPS_CLIENT" id="cdktg.Technology.DEVOPS_CLIENT"></a>

---


##### `WEB_SERVER` <a name="WEB_SERVER" id="cdktg.Technology.WEB_SERVER"></a>

---


##### `WEB_APPLICATION` <a name="WEB_APPLICATION" id="cdktg.Technology.WEB_APPLICATION"></a>

---


##### `APPLICATION_SERVER` <a name="APPLICATION_SERVER" id="cdktg.Technology.APPLICATION_SERVER"></a>

---


##### `DATABASE` <a name="DATABASE" id="cdktg.Technology.DATABASE"></a>

---


##### `FILE_SERVER` <a name="FILE_SERVER" id="cdktg.Technology.FILE_SERVER"></a>

---


##### `LOCAL_FILE_SERVER` <a name="LOCAL_FILE_SERVER" id="cdktg.Technology.LOCAL_FILE_SERVER"></a>

---


##### `ERP` <a name="ERP" id="cdktg.Technology.ERP"></a>

---


##### `CMS` <a name="CMS" id="cdktg.Technology.CMS"></a>

---


##### `WEB_SERVICE_REST` <a name="WEB_SERVICE_REST" id="cdktg.Technology.WEB_SERVICE_REST"></a>

---


##### `WEB_SERVICE_SOAP` <a name="WEB_SERVICE_SOAP" id="cdktg.Technology.WEB_SERVICE_SOAP"></a>

---


##### `EJB` <a name="EJB" id="cdktg.Technology.EJB"></a>

---


##### `SEARCH_INDEX` <a name="SEARCH_INDEX" id="cdktg.Technology.SEARCH_INDEX"></a>

---


##### `SEARCH_ENGINE` <a name="SEARCH_ENGINE" id="cdktg.Technology.SEARCH_ENGINE"></a>

---


##### `SERVICE_REGISTRY` <a name="SERVICE_REGISTRY" id="cdktg.Technology.SERVICE_REGISTRY"></a>

---


##### `REVERSE_PROXY` <a name="REVERSE_PROXY" id="cdktg.Technology.REVERSE_PROXY"></a>

---


##### `LOAD_BALANCER` <a name="LOAD_BALANCER" id="cdktg.Technology.LOAD_BALANCER"></a>

---


##### `BUILD_PIPELINE` <a name="BUILD_PIPELINE" id="cdktg.Technology.BUILD_PIPELINE"></a>

---


##### `SOURCECODE_REPOSITORY` <a name="SOURCECODE_REPOSITORY" id="cdktg.Technology.SOURCECODE_REPOSITORY"></a>

---


##### `ARTIFACT_REGISTRY` <a name="ARTIFACT_REGISTRY" id="cdktg.Technology.ARTIFACT_REGISTRY"></a>

---


##### `CODE_INSPECTION_PLATFORM` <a name="CODE_INSPECTION_PLATFORM" id="cdktg.Technology.CODE_INSPECTION_PLATFORM"></a>

---


##### `MONITORING` <a name="MONITORING" id="cdktg.Technology.MONITORING"></a>

---


##### `LDAP_SERVER` <a name="LDAP_SERVER" id="cdktg.Technology.LDAP_SERVER"></a>

---


##### `CONTAINER_PLATFORM` <a name="CONTAINER_PLATFORM" id="cdktg.Technology.CONTAINER_PLATFORM"></a>

---


##### `BATCH_PROCESSING` <a name="BATCH_PROCESSING" id="cdktg.Technology.BATCH_PROCESSING"></a>

---


##### `EVENT_LISTENER` <a name="EVENT_LISTENER" id="cdktg.Technology.EVENT_LISTENER"></a>

---


##### `IDENTITIY_PROVIDER` <a name="IDENTITIY_PROVIDER" id="cdktg.Technology.IDENTITIY_PROVIDER"></a>

---


##### `IDENTITY_STORE_LDAP` <a name="IDENTITY_STORE_LDAP" id="cdktg.Technology.IDENTITY_STORE_LDAP"></a>

---


##### `IDENTITY_STORE_DATABASE` <a name="IDENTITY_STORE_DATABASE" id="cdktg.Technology.IDENTITY_STORE_DATABASE"></a>

---


##### `TOOL` <a name="TOOL" id="cdktg.Technology.TOOL"></a>

---


##### `CLI` <a name="CLI" id="cdktg.Technology.CLI"></a>

---


##### `TASK` <a name="TASK" id="cdktg.Technology.TASK"></a>

---


##### `FUNCTION` <a name="FUNCTION" id="cdktg.Technology.FUNCTION"></a>

---


##### `GATEWAY` <a name="GATEWAY" id="cdktg.Technology.GATEWAY"></a>

---


##### `IOT_DEVICE` <a name="IOT_DEVICE" id="cdktg.Technology.IOT_DEVICE"></a>

---


##### `MESSAGE_QUEUE` <a name="MESSAGE_QUEUE" id="cdktg.Technology.MESSAGE_QUEUE"></a>

---


##### `STREAM_PROCESSING` <a name="STREAM_PROCESSING" id="cdktg.Technology.STREAM_PROCESSING"></a>

---


##### `SERVICE_MESH` <a name="SERVICE_MESH" id="cdktg.Technology.SERVICE_MESH"></a>

---


##### `DATA_LAKE` <a name="DATA_LAKE" id="cdktg.Technology.DATA_LAKE"></a>

---


##### `REPORT_ENGINE` <a name="REPORT_ENGINE" id="cdktg.Technology.REPORT_ENGINE"></a>

---


##### `AI` <a name="AI" id="cdktg.Technology.AI"></a>

---


##### `MAIL_SERVER` <a name="MAIL_SERVER" id="cdktg.Technology.MAIL_SERVER"></a>

---


##### `VAULT` <a name="VAULT" id="cdktg.Technology.VAULT"></a>

---


##### `HASM` <a name="HASM" id="cdktg.Technology.HASM"></a>

---


##### `WAF` <a name="WAF" id="cdktg.Technology.WAF"></a>

---


##### `IDS` <a name="IDS" id="cdktg.Technology.IDS"></a>

---


##### `IPS` <a name="IPS" id="cdktg.Technology.IPS"></a>

---


##### `SCHEDULER` <a name="SCHEDULER" id="cdktg.Technology.SCHEDULER"></a>

---


##### `MAINFRAME` <a name="MAINFRAME" id="cdktg.Technology.MAINFRAME"></a>

---


##### `BLOCK_STORAGE` <a name="BLOCK_STORAGE" id="cdktg.Technology.BLOCK_STORAGE"></a>

---


##### `LIBRARY` <a name="LIBRARY" id="cdktg.Technology.LIBRARY"></a>

---


### TrustBoundaryType <a name="TrustBoundaryType" id="cdktg.TrustBoundaryType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.TrustBoundaryType.NETWORK_ON_PREM">NETWORK_ON_PREM</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundaryType.NETWORK_DEDICATED_HOSTER">NETWORK_DEDICATED_HOSTER</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundaryType.NETWORK_VIRTUAL_LAN">NETWORK_VIRTUAL_LAN</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundaryType.NETWORK_CLOUD_PROVIDER">NETWORK_CLOUD_PROVIDER</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundaryType.NETWORK_CLOUD_SECURITY_GROUP">NETWORK_CLOUD_SECURITY_GROUP</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundaryType.NETWORK_POLICY_NAMESPACE_ISOLATION">NETWORK_POLICY_NAMESPACE_ISOLATION</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundaryType.EXECUTION_ENVIRONMENT">EXECUTION_ENVIRONMENT</a></code> | *No description.* |

---

##### `NETWORK_ON_PREM` <a name="NETWORK_ON_PREM" id="cdktg.TrustBoundaryType.NETWORK_ON_PREM"></a>

---


##### `NETWORK_DEDICATED_HOSTER` <a name="NETWORK_DEDICATED_HOSTER" id="cdktg.TrustBoundaryType.NETWORK_DEDICATED_HOSTER"></a>

---


##### `NETWORK_VIRTUAL_LAN` <a name="NETWORK_VIRTUAL_LAN" id="cdktg.TrustBoundaryType.NETWORK_VIRTUAL_LAN"></a>

---


##### `NETWORK_CLOUD_PROVIDER` <a name="NETWORK_CLOUD_PROVIDER" id="cdktg.TrustBoundaryType.NETWORK_CLOUD_PROVIDER"></a>

---


##### `NETWORK_CLOUD_SECURITY_GROUP` <a name="NETWORK_CLOUD_SECURITY_GROUP" id="cdktg.TrustBoundaryType.NETWORK_CLOUD_SECURITY_GROUP"></a>

---


##### `NETWORK_POLICY_NAMESPACE_ISOLATION` <a name="NETWORK_POLICY_NAMESPACE_ISOLATION" id="cdktg.TrustBoundaryType.NETWORK_POLICY_NAMESPACE_ISOLATION"></a>

---


##### `EXECUTION_ENVIRONMENT` <a name="EXECUTION_ENVIRONMENT" id="cdktg.TrustBoundaryType.EXECUTION_ENVIRONMENT"></a>

---


### Usage <a name="Usage" id="cdktg.Usage"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Usage.BUSINESS">BUSINESS</a></code> | *No description.* |
| <code><a href="#cdktg.Usage.DEVOPS">DEVOPS</a></code> | *No description.* |

---

##### `BUSINESS` <a name="BUSINESS" id="cdktg.Usage.BUSINESS"></a>

---


##### `DEVOPS` <a name="DEVOPS" id="cdktg.Usage.DEVOPS"></a>

---

