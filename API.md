# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAsset <a name="DataAsset" id="cdktg.DataAsset"></a>

#### Initializers <a name="Initializers" id="cdktg.DataAsset.Initializer"></a>

```typescript
import { DataAsset } from 'cdktg'

new DataAsset(scope: Construct, id: string, props: DataAssetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.DataAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.DataAssetProps">DataAssetProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktg.DataAsset.Initializer.parameter.scope"></a>

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
| <code><a href="#cdktg.DataAsset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.quantity">quantity</a></code> | <code><a href="#cdktg.Quantity">Quantity</a></code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAsset.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.DataAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.DataAsset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.DataAsset.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.DataAsset.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="cdktg.DataAsset.property.quantity"></a>

```typescript
public readonly quantity: Quantity;
```

- *Type:* <a href="#cdktg.Quantity">Quantity</a>

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.DataAsset.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

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

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktg.DataAsset.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

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
| <code><a href="#cdktg.Model.addAbuseCases">addAbuseCases</a></code> | *No description.* |
| <code><a href="#cdktg.Model.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#cdktg.Model.addQuestion">addQuestion</a></code> | *No description.* |
| <code><a href="#cdktg.Model.addSecurityRequirements">addSecurityRequirements</a></code> | *No description.* |
| <code><a href="#cdktg.Model.addTag">addTag</a></code> | *No description.* |
| <code><a href="#cdktg.Model.addTags">addTags</a></code> | *No description.* |
| <code><a href="#cdktg.Model.trackRisk">trackRisk</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktg.Model.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addAbuseCases` <a name="addAbuseCases" id="cdktg.Model.addAbuseCases"></a>

```typescript
public addAbuseCases(cases: AbuseCase): void
```

###### `cases`<sup>Required</sup> <a name="cases" id="cdktg.Model.addAbuseCases.parameter.cases"></a>

- *Type:* <a href="#cdktg.AbuseCase">AbuseCase</a>

---

##### `addOverride` <a name="addOverride" id="cdktg.Model.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="cdktg.Model.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="cdktg.Model.addOverride.parameter.value"></a>

- *Type:* any

---

##### `addQuestion` <a name="addQuestion" id="cdktg.Model.addQuestion"></a>

```typescript
public addQuestion(text: string, answer?: string): void
```

###### `text`<sup>Required</sup> <a name="text" id="cdktg.Model.addQuestion.parameter.text"></a>

- *Type:* string

---

###### `answer`<sup>Optional</sup> <a name="answer" id="cdktg.Model.addQuestion.parameter.answer"></a>

- *Type:* string

---

##### `addSecurityRequirements` <a name="addSecurityRequirements" id="cdktg.Model.addSecurityRequirements"></a>

```typescript
public addSecurityRequirements(requirements: SecurityRequirement): void
```

###### `requirements`<sup>Required</sup> <a name="requirements" id="cdktg.Model.addSecurityRequirements.parameter.requirements"></a>

- *Type:* <a href="#cdktg.SecurityRequirement">SecurityRequirement</a>

---

##### `addTag` <a name="addTag" id="cdktg.Model.addTag"></a>

```typescript
public addTag(tag: string): void
```

###### `tag`<sup>Required</sup> <a name="tag" id="cdktg.Model.addTag.parameter.tag"></a>

- *Type:* string

---

##### `addTags` <a name="addTags" id="cdktg.Model.addTags"></a>

```typescript
public addTags(tags: string): void
```

###### `tags`<sup>Required</sup> <a name="tags" id="cdktg.Model.addTags.parameter.tags"></a>

- *Type:* string

---

##### `trackRisk` <a name="trackRisk" id="cdktg.Model.trackRisk"></a>

```typescript
public trackRisk(id: string, options?: RiskTrackingProps): void
```

###### `id`<sup>Required</sup> <a name="id" id="cdktg.Model.trackRisk.parameter.id"></a>

- *Type:* string

---

###### `options`<sup>Optional</sup> <a name="options" id="cdktg.Model.trackRisk.parameter.options"></a>

- *Type:* <a href="#cdktg.RiskTrackingProps">RiskTrackingProps</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Model.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#cdktg.Model.isModel">isModel</a></code> | *No description.* |
| <code><a href="#cdktg.Model.of">of</a></code> | *No description.* |

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

##### `isModel` <a name="isModel" id="cdktg.Model.isModel"></a>

```typescript
import { Model } from 'cdktg'

Model.isModel(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="cdktg.Model.isModel.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="cdktg.Model.of"></a>

```typescript
import { Model } from 'cdktg'

Model.of(construct: IConstruct)
```

###### `construct`<sup>Required</sup> <a name="construct" id="cdktg.Model.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Model.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.Model.property.author">author</a></code> | <code><a href="#cdktg.Author">Author</a></code> | *No description.* |
| <code><a href="#cdktg.Model.property.businessCriticality">businessCriticality</a></code> | <code><a href="#cdktg.BusinessCriticality">BusinessCriticality</a></code> | *No description.* |
| <code><a href="#cdktg.Model.property.title">title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Model.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Model.property.businessOverview">businessOverview</a></code> | <code><a href="#cdktg.Overview">Overview</a></code> | *No description.* |
| <code><a href="#cdktg.Model.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Model.property.managementSummary">managementSummary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Model.property.technicalOverview">technicalOverview</a></code> | <code><a href="#cdktg.Overview">Overview</a></code> | *No description.* |
| <code><a href="#cdktg.Model.property.synthesizer">synthesizer</a></code> | <code><a href="#cdktg.IModelSynthesizer">IModelSynthesizer</a></code> | *No description.* |

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

##### `businessOverview`<sup>Optional</sup> <a name="businessOverview" id="cdktg.Model.property.businessOverview"></a>

```typescript
public readonly businessOverview: Overview;
```

- *Type:* <a href="#cdktg.Overview">Overview</a>

---

##### `date`<sup>Optional</sup> <a name="date" id="cdktg.Model.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `managementSummary`<sup>Optional</sup> <a name="managementSummary" id="cdktg.Model.property.managementSummary"></a>

```typescript
public readonly managementSummary: string;
```

- *Type:* string

---

##### `technicalOverview`<sup>Optional</sup> <a name="technicalOverview" id="cdktg.Model.property.technicalOverview"></a>

```typescript
public readonly technicalOverview: Overview;
```

- *Type:* <a href="#cdktg.Overview">Overview</a>

---

##### `synthesizer`<sup>Required</sup> <a name="synthesizer" id="cdktg.Model.property.synthesizer"></a>

```typescript
public readonly synthesizer: IModelSynthesizer;
```

- *Type:* <a href="#cdktg.IModelSynthesizer">IModelSynthesizer</a>

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
| <code><a href="#cdktg.Project.property.manifest">manifest</a></code> | <code><a href="#cdktg.Manifest">Manifest</a></code> | *No description.* |
| <code><a href="#cdktg.Project.property.outdir">outdir</a></code> | <code>string</code> | The output directory into which models will be synthesized. |
| <code><a href="#cdktg.Project.property.skipValidation">skipValidation</a></code> | <code>boolean</code> | Whether to skip the validation during synthesis of the app. |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.Project.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="cdktg.Project.property.manifest"></a>

```typescript
public readonly manifest: Manifest;
```

- *Type:* <a href="#cdktg.Manifest">Manifest</a>

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdktg.Project.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The output directory into which models will be synthesized.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="cdktg.Project.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean;
```

- *Type:* boolean

Whether to skip the validation during synthesis of the app.

---


### Resource <a name="Resource" id="cdktg.Resource"></a>

#### Initializers <a name="Initializers" id="cdktg.Resource.Initializer"></a>

```typescript
import { Resource } from 'cdktg'

new Resource(model: Construct, id: string, props: ResourceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Resource.Initializer.parameter.model">model</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.Resource.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Resource.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.ResourceProps">ResourceProps</a></code> | *No description.* |

---

##### `model`<sup>Required</sup> <a name="model" id="cdktg.Resource.Initializer.parameter.model"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.Resource.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.Resource.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.ResourceProps">ResourceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Resource.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktg.Resource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Resource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.Resource.isConstruct"></a>

```typescript
import { Resource } from 'cdktg'

Resource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktg.Resource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Resource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.Resource.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Resource.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.Resource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.Resource.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.Resource.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---


### RiskCategory <a name="RiskCategory" id="cdktg.RiskCategory"></a>

#### Initializers <a name="Initializers" id="cdktg.RiskCategory.Initializer"></a>

```typescript
import { RiskCategory } from 'cdktg'

new RiskCategory(scope: Construct, id: string, props: RiskCategoryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.RiskCategory.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.RiskCategoryProps">RiskCategoryProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktg.RiskCategory.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.RiskCategory.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.RiskCategory.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.RiskCategoryProps">RiskCategoryProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.RiskCategory.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktg.RiskCategory.addIdentifiedRisk">addIdentifiedRisk</a></code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.identifiedAtDataAsset">identifiedAtDataAsset</a></code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.identifiedAtSharedRuntime">identifiedAtSharedRuntime</a></code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.identifiedAtTechnicalAsset">identifiedAtTechnicalAsset</a></code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.identifiedAtTrustBoundary">identifiedAtTrustBoundary</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktg.RiskCategory.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addIdentifiedRisk` <a name="addIdentifiedRisk" id="cdktg.RiskCategory.addIdentifiedRisk"></a>

```typescript
public addIdentifiedRisk(risk: Risk): void
```

###### `risk`<sup>Required</sup> <a name="risk" id="cdktg.RiskCategory.addIdentifiedRisk.parameter.risk"></a>

- *Type:* <a href="#cdktg.Risk">Risk</a>

---

##### `identifiedAtDataAsset` <a name="identifiedAtDataAsset" id="cdktg.RiskCategory.identifiedAtDataAsset"></a>

```typescript
public identifiedAtDataAsset(target: DataAsset, options: RiskOptions): void
```

###### `target`<sup>Required</sup> <a name="target" id="cdktg.RiskCategory.identifiedAtDataAsset.parameter.target"></a>

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---

###### `options`<sup>Required</sup> <a name="options" id="cdktg.RiskCategory.identifiedAtDataAsset.parameter.options"></a>

- *Type:* <a href="#cdktg.RiskOptions">RiskOptions</a>

---

##### `identifiedAtSharedRuntime` <a name="identifiedAtSharedRuntime" id="cdktg.RiskCategory.identifiedAtSharedRuntime"></a>

```typescript
public identifiedAtSharedRuntime(target: SharedRuntime, options: RiskOptions): void
```

###### `target`<sup>Required</sup> <a name="target" id="cdktg.RiskCategory.identifiedAtSharedRuntime.parameter.target"></a>

- *Type:* <a href="#cdktg.SharedRuntime">SharedRuntime</a>

---

###### `options`<sup>Required</sup> <a name="options" id="cdktg.RiskCategory.identifiedAtSharedRuntime.parameter.options"></a>

- *Type:* <a href="#cdktg.RiskOptions">RiskOptions</a>

---

##### `identifiedAtTechnicalAsset` <a name="identifiedAtTechnicalAsset" id="cdktg.RiskCategory.identifiedAtTechnicalAsset"></a>

```typescript
public identifiedAtTechnicalAsset(target: TechnicalAsset, options: RiskOptions): void
```

###### `target`<sup>Required</sup> <a name="target" id="cdktg.RiskCategory.identifiedAtTechnicalAsset.parameter.target"></a>

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

###### `options`<sup>Required</sup> <a name="options" id="cdktg.RiskCategory.identifiedAtTechnicalAsset.parameter.options"></a>

- *Type:* <a href="#cdktg.RiskOptions">RiskOptions</a>

---

##### `identifiedAtTrustBoundary` <a name="identifiedAtTrustBoundary" id="cdktg.RiskCategory.identifiedAtTrustBoundary"></a>

```typescript
public identifiedAtTrustBoundary(target: SharedRuntime, options: RiskOptions): void
```

###### `target`<sup>Required</sup> <a name="target" id="cdktg.RiskCategory.identifiedAtTrustBoundary.parameter.target"></a>

- *Type:* <a href="#cdktg.SharedRuntime">SharedRuntime</a>

---

###### `options`<sup>Required</sup> <a name="options" id="cdktg.RiskCategory.identifiedAtTrustBoundary.parameter.options"></a>

- *Type:* <a href="#cdktg.RiskOptions">RiskOptions</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.RiskCategory.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.RiskCategory.isConstruct"></a>

```typescript
import { RiskCategory } from 'cdktg'

RiskCategory.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktg.RiskCategory.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.RiskCategory.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.RiskCategory.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.asvs">asvs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.cheatSheat">cheatSheat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.cwe">cwe</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.detectionLogic">detectionLogic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.falsePositives">falsePositives</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.function">function</a></code> | <code><a href="#cdktg.RiskFunction">RiskFunction</a></code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.impact">impact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.mitigation">mitigation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.riskAssessment">riskAssessment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.stride">stride</a></code> | <code><a href="#cdktg.Stride">Stride</a></code> | *No description.* |
| <code><a href="#cdktg.RiskCategory.property.modelFailurePossibleReason">modelFailurePossibleReason</a></code> | <code>boolean</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.RiskCategory.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.RiskCategory.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.RiskCategory.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="cdktg.RiskCategory.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `asvs`<sup>Required</sup> <a name="asvs" id="cdktg.RiskCategory.property.asvs"></a>

```typescript
public readonly asvs: string;
```

- *Type:* string

---

##### `cheatSheat`<sup>Required</sup> <a name="cheatSheat" id="cdktg.RiskCategory.property.cheatSheat"></a>

```typescript
public readonly cheatSheat: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="cdktg.RiskCategory.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `cwe`<sup>Required</sup> <a name="cwe" id="cdktg.RiskCategory.property.cwe"></a>

```typescript
public readonly cwe: number;
```

- *Type:* number

---

##### `detectionLogic`<sup>Required</sup> <a name="detectionLogic" id="cdktg.RiskCategory.property.detectionLogic"></a>

```typescript
public readonly detectionLogic: string;
```

- *Type:* string

---

##### `falsePositives`<sup>Required</sup> <a name="falsePositives" id="cdktg.RiskCategory.property.falsePositives"></a>

```typescript
public readonly falsePositives: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="cdktg.RiskCategory.property.function"></a>

```typescript
public readonly function: RiskFunction;
```

- *Type:* <a href="#cdktg.RiskFunction">RiskFunction</a>

---

##### `impact`<sup>Required</sup> <a name="impact" id="cdktg.RiskCategory.property.impact"></a>

```typescript
public readonly impact: string;
```

- *Type:* string

---

##### `mitigation`<sup>Required</sup> <a name="mitigation" id="cdktg.RiskCategory.property.mitigation"></a>

```typescript
public readonly mitigation: string;
```

- *Type:* string

---

##### `riskAssessment`<sup>Required</sup> <a name="riskAssessment" id="cdktg.RiskCategory.property.riskAssessment"></a>

```typescript
public readonly riskAssessment: string;
```

- *Type:* string

---

##### `stride`<sup>Required</sup> <a name="stride" id="cdktg.RiskCategory.property.stride"></a>

```typescript
public readonly stride: Stride;
```

- *Type:* <a href="#cdktg.Stride">Stride</a>

---

##### `modelFailurePossibleReason`<sup>Optional</sup> <a name="modelFailurePossibleReason" id="cdktg.RiskCategory.property.modelFailurePossibleReason"></a>

```typescript
public readonly modelFailurePossibleReason: boolean;
```

- *Type:* boolean

---


### SharedRuntime <a name="SharedRuntime" id="cdktg.SharedRuntime"></a>

#### Initializers <a name="Initializers" id="cdktg.SharedRuntime.Initializer"></a>

```typescript
import { SharedRuntime } from 'cdktg'

new SharedRuntime(scope: Construct, id: string, props: SharedRuntimeProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.SharedRuntime.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.SharedRuntime.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.SharedRuntime.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.SharedRuntimeProps">SharedRuntimeProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktg.SharedRuntime.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.SharedRuntime.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.SharedRuntime.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.SharedRuntimeProps">SharedRuntimeProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.SharedRuntime.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#cdktg.SharedRuntime.runs">runs</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktg.SharedRuntime.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `runs` <a name="runs" id="cdktg.SharedRuntime.runs"></a>

```typescript
public runs(assets: TechnicalAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.SharedRuntime.runs.parameter.assets"></a>

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.SharedRuntime.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktg.SharedRuntime.isConstruct"></a>

```typescript
import { SharedRuntime } from 'cdktg'

SharedRuntime.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="cdktg.SharedRuntime.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.SharedRuntime.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktg.SharedRuntime.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.SharedRuntime.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.SharedRuntime.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.SharedRuntime.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.SharedRuntime.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.SharedRuntime.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktg.SharedRuntime.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---


### TechnicalAsset <a name="TechnicalAsset" id="cdktg.TechnicalAsset"></a>

#### Initializers <a name="Initializers" id="cdktg.TechnicalAsset.Initializer"></a>

```typescript
import { TechnicalAsset } from 'cdktg'

new TechnicalAsset(scope: Construct, id: string, props: TechnicalAssetProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.TechnicalAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.TechnicalAssetProps">TechnicalAssetProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktg.TechnicalAsset.Initializer.parameter.scope"></a>

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
| <code><a href="#cdktg.TechnicalAsset.communicatesWith">communicatesWith</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.processes">processes</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.stores">stores</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="cdktg.TechnicalAsset.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `communicatesWith` <a name="communicatesWith" id="cdktg.TechnicalAsset.communicatesWith"></a>

```typescript
public communicatesWith(id: string, target: TechnicalAsset, options: CommunicationOptions): Communication
```

###### `id`<sup>Required</sup> <a name="id" id="cdktg.TechnicalAsset.communicatesWith.parameter.id"></a>

- *Type:* string

---

###### `target`<sup>Required</sup> <a name="target" id="cdktg.TechnicalAsset.communicatesWith.parameter.target"></a>

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

###### `options`<sup>Required</sup> <a name="options" id="cdktg.TechnicalAsset.communicatesWith.parameter.options"></a>

- *Type:* <a href="#cdktg.CommunicationOptions">CommunicationOptions</a>

---

##### `processes` <a name="processes" id="cdktg.TechnicalAsset.processes"></a>

```typescript
public processes(assets: DataAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.TechnicalAsset.processes.parameter.assets"></a>

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---

##### `stores` <a name="stores" id="cdktg.TechnicalAsset.stores"></a>

```typescript
public stores(assets: DataAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.TechnicalAsset.stores.parameter.assets"></a>

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
| <code><a href="#cdktg.TechnicalAsset.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.customDevelopedParts">customDevelopedParts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.encryption">encryption</a></code> | <code><a href="#cdktg.Encryption">Encryption</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.humanUse">humanUse</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.internet">internet</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.machine">machine</a></code> | <code><a href="#cdktg.Machine">Machine</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.multiTenant">multiTenant</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.redundant">redundant</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.size">size</a></code> | <code><a href="#cdktg.Size">Size</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.technology">technology</a></code> | <code><a href="#cdktg.Technology">Technology</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.type">type</a></code> | <code><a href="#cdktg.TechnicalAssetType">TechnicalAssetType</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.dataFormatsAccepted">dataFormatsAccepted</a></code> | <code><a href="#cdktg.DataFormat">DataFormat</a>[]</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.scope">scope</a></code> | <code><a href="#cdktg.Scope">Scope</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAsset.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktg.TechnicalAsset.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.TechnicalAsset.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.TechnicalAsset.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.TechnicalAsset.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `customDevelopedParts`<sup>Required</sup> <a name="customDevelopedParts" id="cdktg.TechnicalAsset.property.customDevelopedParts"></a>

```typescript
public readonly customDevelopedParts: boolean;
```

- *Type:* boolean

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

##### `type`<sup>Required</sup> <a name="type" id="cdktg.TechnicalAsset.property.type"></a>

```typescript
public readonly type: TechnicalAssetType;
```

- *Type:* <a href="#cdktg.TechnicalAssetType">TechnicalAssetType</a>

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.TechnicalAsset.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `dataFormatsAccepted`<sup>Optional</sup> <a name="dataFormatsAccepted" id="cdktg.TechnicalAsset.property.dataFormatsAccepted"></a>

```typescript
public readonly dataFormatsAccepted: DataFormat[];
```

- *Type:* <a href="#cdktg.DataFormat">DataFormat</a>[]

---

##### `scope`<sup>Optional</sup> <a name="scope" id="cdktg.TechnicalAsset.property.scope"></a>

```typescript
public readonly scope: Scope;
```

- *Type:* <a href="#cdktg.Scope">Scope</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktg.TechnicalAsset.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---


### TrustBoundary <a name="TrustBoundary" id="cdktg.TrustBoundary"></a>

#### Initializers <a name="Initializers" id="cdktg.TrustBoundary.Initializer"></a>

```typescript
import { TrustBoundary } from 'cdktg'

new TrustBoundary(scope: Construct, id: string, props: TrustBoundaryProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.TrustBoundary.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.TrustBoundaryProps">TrustBoundaryProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktg.TrustBoundary.Initializer.parameter.scope"></a>

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
| <code><a href="#cdktg.TrustBoundary.property.uuid">uuid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.property.type">type</a></code> | <code><a href="#cdktg.TrustBoundaryType">TrustBoundaryType</a></code> | *No description.* |
| <code><a href="#cdktg.TrustBoundary.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

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

##### `uuid`<sup>Required</sup> <a name="uuid" id="cdktg.TrustBoundary.property.uuid"></a>

```typescript
public readonly uuid: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="cdktg.TrustBoundary.property.type"></a>

```typescript
public readonly type: TrustBoundaryType;
```

- *Type:* <a href="#cdktg.TrustBoundaryType">TrustBoundaryType</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktg.TrustBoundary.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---


## Structs <a name="Structs" id="Structs"></a>

### AbuseCaseProps <a name="AbuseCaseProps" id="cdktg.AbuseCaseProps"></a>

#### Initializer <a name="Initializer" id="cdktg.AbuseCaseProps.Initializer"></a>

```typescript
import { AbuseCaseProps } from 'cdktg'

const abuseCaseProps: AbuseCaseProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.AbuseCaseProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.AbuseCaseProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.AbuseCaseProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdktg.AbuseCaseProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

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
| <code><a href="#cdktg.CommunicationProps.property.caller">caller</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a></code> | *No description.* |
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

##### `caller`<sup>Required</sup> <a name="caller" id="cdktg.CommunicationProps.property.caller"></a>

```typescript
public readonly caller: TechnicalAsset;
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

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
| <code><a href="#cdktg.DataAssetProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.quantity">quantity</a></code> | <code><a href="#cdktg.Quantity">Quantity</a></code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.origin">origin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.DataAssetProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.DataAssetProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.DataAssetProps.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="cdktg.DataAssetProps.property.quantity"></a>

```typescript
public readonly quantity: Quantity;
```

- *Type:* <a href="#cdktg.Quantity">Quantity</a>

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.DataAssetProps.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

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

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktg.DataAssetProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

### ModelAnnotation <a name="ModelAnnotation" id="cdktg.ModelAnnotation"></a>

#### Initializer <a name="Initializer" id="cdktg.ModelAnnotation.Initializer"></a>

```typescript
import { ModelAnnotation } from 'cdktg'

const modelAnnotation: ModelAnnotation = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.ModelAnnotation.property.constructPath">constructPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.ModelAnnotation.property.level">level</a></code> | <code><a href="#cdktg.AnnotationMetadataEntryType">AnnotationMetadataEntryType</a></code> | *No description.* |
| <code><a href="#cdktg.ModelAnnotation.property.message">message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.ModelAnnotation.property.stacktrace">stacktrace</a></code> | <code>string[]</code> | *No description.* |

---

##### `constructPath`<sup>Required</sup> <a name="constructPath" id="cdktg.ModelAnnotation.property.constructPath"></a>

```typescript
public readonly constructPath: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="cdktg.ModelAnnotation.property.level"></a>

```typescript
public readonly level: AnnotationMetadataEntryType;
```

- *Type:* <a href="#cdktg.AnnotationMetadataEntryType">AnnotationMetadataEntryType</a>

---

##### `message`<sup>Required</sup> <a name="message" id="cdktg.ModelAnnotation.property.message"></a>

```typescript
public readonly message: string;
```

- *Type:* string

---

##### `stacktrace`<sup>Optional</sup> <a name="stacktrace" id="cdktg.ModelAnnotation.property.stacktrace"></a>

```typescript
public readonly stacktrace: string[];
```

- *Type:* string[]

---

### ModelManifest <a name="ModelManifest" id="cdktg.ModelManifest"></a>

#### Initializer <a name="Initializer" id="cdktg.ModelManifest.Initializer"></a>

```typescript
import { ModelManifest } from 'cdktg'

const modelManifest: ModelManifest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.ModelManifest.property.annotations">annotations</a></code> | <code><a href="#cdktg.ModelAnnotation">ModelAnnotation</a>[]</code> | *No description.* |
| <code><a href="#cdktg.ModelManifest.property.constructPath">constructPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.ModelManifest.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.ModelManifest.property.sanitizedName">sanitizedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.ModelManifest.property.synthesizedModelPath">synthesizedModelPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.ModelManifest.property.workingDirectory">workingDirectory</a></code> | <code>string</code> | *No description.* |

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="cdktg.ModelManifest.property.annotations"></a>

```typescript
public readonly annotations: ModelAnnotation[];
```

- *Type:* <a href="#cdktg.ModelAnnotation">ModelAnnotation</a>[]

---

##### `constructPath`<sup>Required</sup> <a name="constructPath" id="cdktg.ModelManifest.property.constructPath"></a>

```typescript
public readonly constructPath: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdktg.ModelManifest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sanitizedName`<sup>Required</sup> <a name="sanitizedName" id="cdktg.ModelManifest.property.sanitizedName"></a>

```typescript
public readonly sanitizedName: string;
```

- *Type:* string

---

##### `synthesizedModelPath`<sup>Required</sup> <a name="synthesizedModelPath" id="cdktg.ModelManifest.property.synthesizedModelPath"></a>

```typescript
public readonly synthesizedModelPath: string;
```

- *Type:* string

---

##### `workingDirectory`<sup>Required</sup> <a name="workingDirectory" id="cdktg.ModelManifest.property.workingDirectory"></a>

```typescript
public readonly workingDirectory: string;
```

- *Type:* string

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
| <code><a href="#cdktg.ModelProps.property.abuseCases">abuseCases</a></code> | <code><a href="#cdktg.AbuseCase">AbuseCase</a>[]</code> | Custom abuse cases for the report. |
| <code><a href="#cdktg.ModelProps.property.businessOverview">businessOverview</a></code> | <code><a href="#cdktg.Overview">Overview</a></code> | Individual business overview for the report. |
| <code><a href="#cdktg.ModelProps.property.date">date</a></code> | <code>string</code> | Date of the model. |
| <code><a href="#cdktg.ModelProps.property.managementSummary">managementSummary</a></code> | <code>string</code> | Individual management summary for the report. |
| <code><a href="#cdktg.ModelProps.property.questions">questions</a></code> | <code><a href="#cdktg.Question">Question</a>[]</code> | Custom questions for the report. |
| <code><a href="#cdktg.ModelProps.property.securityRequirements">securityRequirements</a></code> | <code><a href="#cdktg.SecurityRequirement">SecurityRequirement</a>[]</code> | Custom security requirements for the report. |
| <code><a href="#cdktg.ModelProps.property.technicalOverview">technicalOverview</a></code> | <code><a href="#cdktg.Overview">Overview</a></code> | Individual technical overview for the report. |
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

##### `abuseCases`<sup>Optional</sup> <a name="abuseCases" id="cdktg.ModelProps.property.abuseCases"></a>

```typescript
public readonly abuseCases: AbuseCase[];
```

- *Type:* <a href="#cdktg.AbuseCase">AbuseCase</a>[]

Custom abuse cases for the report.

---

##### `businessOverview`<sup>Optional</sup> <a name="businessOverview" id="cdktg.ModelProps.property.businessOverview"></a>

```typescript
public readonly businessOverview: Overview;
```

- *Type:* <a href="#cdktg.Overview">Overview</a>

Individual business overview for the report.

---

##### `date`<sup>Optional</sup> <a name="date" id="cdktg.ModelProps.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

Date of the model.

---

##### `managementSummary`<sup>Optional</sup> <a name="managementSummary" id="cdktg.ModelProps.property.managementSummary"></a>

```typescript
public readonly managementSummary: string;
```

- *Type:* string

Individual management summary for the report.

---

##### `questions`<sup>Optional</sup> <a name="questions" id="cdktg.ModelProps.property.questions"></a>

```typescript
public readonly questions: Question[];
```

- *Type:* <a href="#cdktg.Question">Question</a>[]

Custom questions for the report.

---

##### `securityRequirements`<sup>Optional</sup> <a name="securityRequirements" id="cdktg.ModelProps.property.securityRequirements"></a>

```typescript
public readonly securityRequirements: SecurityRequirement[];
```

- *Type:* <a href="#cdktg.SecurityRequirement">SecurityRequirement</a>[]

Custom security requirements for the report.

---

##### `technicalOverview`<sup>Optional</sup> <a name="technicalOverview" id="cdktg.ModelProps.property.technicalOverview"></a>

```typescript
public readonly technicalOverview: Overview;
```

- *Type:* <a href="#cdktg.Overview">Overview</a>

Individual technical overview for the report.

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

### OverviewProps <a name="OverviewProps" id="cdktg.OverviewProps"></a>

#### Initializer <a name="Initializer" id="cdktg.OverviewProps.Initializer"></a>

```typescript
import { OverviewProps } from 'cdktg'

const overviewProps: OverviewProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.OverviewProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.OverviewProps.property.images">images</a></code> | <code><a href="#cdktg.Image">Image</a>[]</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.OverviewProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `images`<sup>Optional</sup> <a name="images" id="cdktg.OverviewProps.property.images"></a>

```typescript
public readonly images: Image[];
```

- *Type:* <a href="#cdktg.Image">Image</a>[]

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
| <code><a href="#cdktg.ProjectProps.property.skipValidation">skipValidation</a></code> | <code>boolean</code> | Whether to skip the validation during synthesis of the project. |

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="cdktg.ProjectProps.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* .

The directory to output the threadgile model.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="cdktg.ProjectProps.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to skip the validation during synthesis of the project.

---

### Question <a name="Question" id="cdktg.Question"></a>

#### Initializer <a name="Initializer" id="cdktg.Question.Initializer"></a>

```typescript
import { Question } from 'cdktg'

const question: Question = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Question.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Question.property.answer">answer</a></code> | <code>string</code> | *No description.* |

---

##### `text`<sup>Required</sup> <a name="text" id="cdktg.Question.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `answer`<sup>Optional</sup> <a name="answer" id="cdktg.Question.property.answer"></a>

```typescript
public readonly answer: string;
```

- *Type:* string

---

### ResourceProps <a name="ResourceProps" id="cdktg.ResourceProps"></a>

#### Initializer <a name="Initializer" id="cdktg.ResourceProps.Initializer"></a>

```typescript
import { ResourceProps } from 'cdktg'

const resourceProps: ResourceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.ResourceProps.property.description">description</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.ResourceProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

### RiskCategoryProps <a name="RiskCategoryProps" id="cdktg.RiskCategoryProps"></a>

#### Initializer <a name="Initializer" id="cdktg.RiskCategoryProps.Initializer"></a>

```typescript
import { RiskCategoryProps } from 'cdktg'

const riskCategoryProps: RiskCategoryProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.RiskCategoryProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.asvs">asvs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.cheatSheat">cheatSheat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.check">check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.cwe">cwe</a></code> | <code>number</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.detectionLogic">detectionLogic</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.falsePositives">falsePositives</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.function">function</a></code> | <code><a href="#cdktg.RiskFunction">RiskFunction</a></code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.impact">impact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.mitigation">mitigation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.riskAssessment">riskAssessment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.stride">stride</a></code> | <code><a href="#cdktg.Stride">Stride</a></code> | *No description.* |
| <code><a href="#cdktg.RiskCategoryProps.property.modelFailurePossibleReason">modelFailurePossibleReason</a></code> | <code>boolean</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.RiskCategoryProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="cdktg.RiskCategoryProps.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `asvs`<sup>Required</sup> <a name="asvs" id="cdktg.RiskCategoryProps.property.asvs"></a>

```typescript
public readonly asvs: string;
```

- *Type:* string

---

##### `cheatSheat`<sup>Required</sup> <a name="cheatSheat" id="cdktg.RiskCategoryProps.property.cheatSheat"></a>

```typescript
public readonly cheatSheat: string;
```

- *Type:* string

---

##### `check`<sup>Required</sup> <a name="check" id="cdktg.RiskCategoryProps.property.check"></a>

```typescript
public readonly check: string;
```

- *Type:* string

---

##### `cwe`<sup>Required</sup> <a name="cwe" id="cdktg.RiskCategoryProps.property.cwe"></a>

```typescript
public readonly cwe: number;
```

- *Type:* number

---

##### `detectionLogic`<sup>Required</sup> <a name="detectionLogic" id="cdktg.RiskCategoryProps.property.detectionLogic"></a>

```typescript
public readonly detectionLogic: string;
```

- *Type:* string

---

##### `falsePositives`<sup>Required</sup> <a name="falsePositives" id="cdktg.RiskCategoryProps.property.falsePositives"></a>

```typescript
public readonly falsePositives: string;
```

- *Type:* string

---

##### `function`<sup>Required</sup> <a name="function" id="cdktg.RiskCategoryProps.property.function"></a>

```typescript
public readonly function: RiskFunction;
```

- *Type:* <a href="#cdktg.RiskFunction">RiskFunction</a>

---

##### `impact`<sup>Required</sup> <a name="impact" id="cdktg.RiskCategoryProps.property.impact"></a>

```typescript
public readonly impact: string;
```

- *Type:* string

---

##### `mitigation`<sup>Required</sup> <a name="mitigation" id="cdktg.RiskCategoryProps.property.mitigation"></a>

```typescript
public readonly mitigation: string;
```

- *Type:* string

---

##### `riskAssessment`<sup>Required</sup> <a name="riskAssessment" id="cdktg.RiskCategoryProps.property.riskAssessment"></a>

```typescript
public readonly riskAssessment: string;
```

- *Type:* string

---

##### `stride`<sup>Required</sup> <a name="stride" id="cdktg.RiskCategoryProps.property.stride"></a>

```typescript
public readonly stride: Stride;
```

- *Type:* <a href="#cdktg.Stride">Stride</a>

---

##### `modelFailurePossibleReason`<sup>Optional</sup> <a name="modelFailurePossibleReason" id="cdktg.RiskCategoryProps.property.modelFailurePossibleReason"></a>

```typescript
public readonly modelFailurePossibleReason: boolean;
```

- *Type:* boolean

---

### RiskOptions <a name="RiskOptions" id="cdktg.RiskOptions"></a>

#### Initializer <a name="Initializer" id="cdktg.RiskOptions.Initializer"></a>

```typescript
import { RiskOptions } from 'cdktg'

const riskOptions: RiskOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.RiskOptions.property.dataBreachProbability">dataBreachProbability</a></code> | <code><a href="#cdktg.DataBreachProbability">DataBreachProbability</a></code> | *No description.* |
| <code><a href="#cdktg.RiskOptions.property.dataBreachTechnicalAssets">dataBreachTechnicalAssets</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a>[]</code> | *No description.* |
| <code><a href="#cdktg.RiskOptions.property.exploitationImpact">exploitationImpact</a></code> | <code><a href="#cdktg.ExploitationImpact">ExploitationImpact</a></code> | *No description.* |
| <code><a href="#cdktg.RiskOptions.property.exploitationLikelihood">exploitationLikelihood</a></code> | <code><a href="#cdktg.ExploitationLikelihood">ExploitationLikelihood</a></code> | *No description.* |
| <code><a href="#cdktg.RiskOptions.property.severity">severity</a></code> | <code><a href="#cdktg.Severity">Severity</a></code> | *No description.* |

---

##### `dataBreachProbability`<sup>Required</sup> <a name="dataBreachProbability" id="cdktg.RiskOptions.property.dataBreachProbability"></a>

```typescript
public readonly dataBreachProbability: DataBreachProbability;
```

- *Type:* <a href="#cdktg.DataBreachProbability">DataBreachProbability</a>

---

##### `dataBreachTechnicalAssets`<sup>Required</sup> <a name="dataBreachTechnicalAssets" id="cdktg.RiskOptions.property.dataBreachTechnicalAssets"></a>

```typescript
public readonly dataBreachTechnicalAssets: TechnicalAsset[];
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>[]

---

##### `exploitationImpact`<sup>Required</sup> <a name="exploitationImpact" id="cdktg.RiskOptions.property.exploitationImpact"></a>

```typescript
public readonly exploitationImpact: ExploitationImpact;
```

- *Type:* <a href="#cdktg.ExploitationImpact">ExploitationImpact</a>

---

##### `exploitationLikelihood`<sup>Required</sup> <a name="exploitationLikelihood" id="cdktg.RiskOptions.property.exploitationLikelihood"></a>

```typescript
public readonly exploitationLikelihood: ExploitationLikelihood;
```

- *Type:* <a href="#cdktg.ExploitationLikelihood">ExploitationLikelihood</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="cdktg.RiskOptions.property.severity"></a>

```typescript
public readonly severity: Severity;
```

- *Type:* <a href="#cdktg.Severity">Severity</a>

---

### RiskProps <a name="RiskProps" id="cdktg.RiskProps"></a>

#### Initializer <a name="Initializer" id="cdktg.RiskProps.Initializer"></a>

```typescript
import { RiskProps } from 'cdktg'

const riskProps: RiskProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.RiskProps.property.dataBreachProbability">dataBreachProbability</a></code> | <code><a href="#cdktg.DataBreachProbability">DataBreachProbability</a></code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.dataBreachTechnicalAssets">dataBreachTechnicalAssets</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a>[]</code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.exploitationImpact">exploitationImpact</a></code> | <code><a href="#cdktg.ExploitationImpact">ExploitationImpact</a></code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.exploitationLikelihood">exploitationLikelihood</a></code> | <code><a href="#cdktg.ExploitationLikelihood">ExploitationLikelihood</a></code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.severity">severity</a></code> | <code><a href="#cdktg.Severity">Severity</a></code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.mostRelevantCommunicationLink">mostRelevantCommunicationLink</a></code> | <code><a href="#cdktg.Communication">Communication</a></code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.mostRelevantDataAsset">mostRelevantDataAsset</a></code> | <code><a href="#cdktg.DataAsset">DataAsset</a></code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.mostRelevantSharedRuntime">mostRelevantSharedRuntime</a></code> | <code><a href="#cdktg.SharedRuntime">SharedRuntime</a></code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.mostRelevantTechnicalAsset">mostRelevantTechnicalAsset</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a></code> | *No description.* |
| <code><a href="#cdktg.RiskProps.property.mostRelevantTrustBoundary">mostRelevantTrustBoundary</a></code> | <code><a href="#cdktg.TrustBoundary">TrustBoundary</a></code> | *No description.* |

---

##### `dataBreachProbability`<sup>Required</sup> <a name="dataBreachProbability" id="cdktg.RiskProps.property.dataBreachProbability"></a>

```typescript
public readonly dataBreachProbability: DataBreachProbability;
```

- *Type:* <a href="#cdktg.DataBreachProbability">DataBreachProbability</a>

---

##### `dataBreachTechnicalAssets`<sup>Required</sup> <a name="dataBreachTechnicalAssets" id="cdktg.RiskProps.property.dataBreachTechnicalAssets"></a>

```typescript
public readonly dataBreachTechnicalAssets: TechnicalAsset[];
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>[]

---

##### `exploitationImpact`<sup>Required</sup> <a name="exploitationImpact" id="cdktg.RiskProps.property.exploitationImpact"></a>

```typescript
public readonly exploitationImpact: ExploitationImpact;
```

- *Type:* <a href="#cdktg.ExploitationImpact">ExploitationImpact</a>

---

##### `exploitationLikelihood`<sup>Required</sup> <a name="exploitationLikelihood" id="cdktg.RiskProps.property.exploitationLikelihood"></a>

```typescript
public readonly exploitationLikelihood: ExploitationLikelihood;
```

- *Type:* <a href="#cdktg.ExploitationLikelihood">ExploitationLikelihood</a>

---

##### `severity`<sup>Required</sup> <a name="severity" id="cdktg.RiskProps.property.severity"></a>

```typescript
public readonly severity: Severity;
```

- *Type:* <a href="#cdktg.Severity">Severity</a>

---

##### `mostRelevantCommunicationLink`<sup>Optional</sup> <a name="mostRelevantCommunicationLink" id="cdktg.RiskProps.property.mostRelevantCommunicationLink"></a>

```typescript
public readonly mostRelevantCommunicationLink: Communication;
```

- *Type:* <a href="#cdktg.Communication">Communication</a>

---

##### `mostRelevantDataAsset`<sup>Optional</sup> <a name="mostRelevantDataAsset" id="cdktg.RiskProps.property.mostRelevantDataAsset"></a>

```typescript
public readonly mostRelevantDataAsset: DataAsset;
```

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---

##### `mostRelevantSharedRuntime`<sup>Optional</sup> <a name="mostRelevantSharedRuntime" id="cdktg.RiskProps.property.mostRelevantSharedRuntime"></a>

```typescript
public readonly mostRelevantSharedRuntime: SharedRuntime;
```

- *Type:* <a href="#cdktg.SharedRuntime">SharedRuntime</a>

---

##### `mostRelevantTechnicalAsset`<sup>Optional</sup> <a name="mostRelevantTechnicalAsset" id="cdktg.RiskProps.property.mostRelevantTechnicalAsset"></a>

```typescript
public readonly mostRelevantTechnicalAsset: TechnicalAsset;
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

##### `mostRelevantTrustBoundary`<sup>Optional</sup> <a name="mostRelevantTrustBoundary" id="cdktg.RiskProps.property.mostRelevantTrustBoundary"></a>

```typescript
public readonly mostRelevantTrustBoundary: TrustBoundary;
```

- *Type:* <a href="#cdktg.TrustBoundary">TrustBoundary</a>

---

### RiskTrackingProps <a name="RiskTrackingProps" id="cdktg.RiskTrackingProps"></a>

#### Initializer <a name="Initializer" id="cdktg.RiskTrackingProps.Initializer"></a>

```typescript
import { RiskTrackingProps } from 'cdktg'

const riskTrackingProps: RiskTrackingProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.RiskTrackingProps.property.checkedBy">checkedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingProps.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingProps.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingProps.property.status">status</a></code> | <code><a href="#cdktg.RiskTrackingStatus">RiskTrackingStatus</a></code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingProps.property.ticket">ticket</a></code> | <code>string</code> | *No description.* |

---

##### `checkedBy`<sup>Optional</sup> <a name="checkedBy" id="cdktg.RiskTrackingProps.property.checkedBy"></a>

```typescript
public readonly checkedBy: string;
```

- *Type:* string

---

##### `date`<sup>Optional</sup> <a name="date" id="cdktg.RiskTrackingProps.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.RiskTrackingProps.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `status`<sup>Optional</sup> <a name="status" id="cdktg.RiskTrackingProps.property.status"></a>

```typescript
public readonly status: RiskTrackingStatus;
```

- *Type:* <a href="#cdktg.RiskTrackingStatus">RiskTrackingStatus</a>

---

##### `ticket`<sup>Optional</sup> <a name="ticket" id="cdktg.RiskTrackingProps.property.ticket"></a>

```typescript
public readonly ticket: string;
```

- *Type:* string

---

### SecurityRequirementProps <a name="SecurityRequirementProps" id="cdktg.SecurityRequirementProps"></a>

#### Initializer <a name="Initializer" id="cdktg.SecurityRequirementProps.Initializer"></a>

```typescript
import { SecurityRequirementProps } from 'cdktg'

const securityRequirementProps: SecurityRequirementProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.SecurityRequirementProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.SecurityRequirementProps.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.SecurityRequirementProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdktg.SecurityRequirementProps.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

### SharedRuntimeProps <a name="SharedRuntimeProps" id="cdktg.SharedRuntimeProps"></a>

#### Initializer <a name="Initializer" id="cdktg.SharedRuntimeProps.Initializer"></a>

```typescript
import { SharedRuntimeProps } from 'cdktg'

const sharedRuntimeProps: SharedRuntimeProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.SharedRuntimeProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.SharedRuntimeProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.SharedRuntimeProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktg.SharedRuntimeProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

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
| <code><a href="#cdktg.TechnicalAssetProps.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.ciaTriad">ciaTriad</a></code> | <code><a href="#cdktg.CIATriad">CIATriad</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.encryption">encryption</a></code> | <code><a href="#cdktg.Encryption">Encryption</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.humanUse">humanUse</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.internet">internet</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.machine">machine</a></code> | <code><a href="#cdktg.Machine">Machine</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.multiTenant">multiTenant</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.redundant">redundant</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.size">size</a></code> | <code><a href="#cdktg.Size">Size</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.technology">technology</a></code> | <code><a href="#cdktg.Technology">Technology</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.type">type</a></code> | <code><a href="#cdktg.TechnicalAssetType">TechnicalAssetType</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.usage">usage</a></code> | <code><a href="#cdktg.Usage">Usage</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.customDevelopedParts">customDevelopedParts</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.dataFormatsAccepted">dataFormatsAccepted</a></code> | <code><a href="#cdktg.DataFormat">DataFormat</a>[]</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.scope">scope</a></code> | <code><a href="#cdktg.Scope">Scope</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetProps.property.trustBoundary">trustBoundary</a></code> | <code><a href="#cdktg.TrustBoundary">TrustBoundary</a></code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.TechnicalAssetProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `ciaTriad`<sup>Required</sup> <a name="ciaTriad" id="cdktg.TechnicalAssetProps.property.ciaTriad"></a>

```typescript
public readonly ciaTriad: CIATriad;
```

- *Type:* <a href="#cdktg.CIATriad">CIATriad</a>

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

##### `type`<sup>Required</sup> <a name="type" id="cdktg.TechnicalAssetProps.property.type"></a>

```typescript
public readonly type: TechnicalAssetType;
```

- *Type:* <a href="#cdktg.TechnicalAssetType">TechnicalAssetType</a>

---

##### `usage`<sup>Required</sup> <a name="usage" id="cdktg.TechnicalAssetProps.property.usage"></a>

```typescript
public readonly usage: Usage;
```

- *Type:* <a href="#cdktg.Usage">Usage</a>

---

##### `customDevelopedParts`<sup>Optional</sup> <a name="customDevelopedParts" id="cdktg.TechnicalAssetProps.property.customDevelopedParts"></a>

```typescript
public readonly customDevelopedParts: boolean;
```

- *Type:* boolean

---

##### `dataFormatsAccepted`<sup>Optional</sup> <a name="dataFormatsAccepted" id="cdktg.TechnicalAssetProps.property.dataFormatsAccepted"></a>

```typescript
public readonly dataFormatsAccepted: DataFormat[];
```

- *Type:* <a href="#cdktg.DataFormat">DataFormat</a>[]

---

##### `scope`<sup>Optional</sup> <a name="scope" id="cdktg.TechnicalAssetProps.property.scope"></a>

```typescript
public readonly scope: Scope;
```

- *Type:* <a href="#cdktg.Scope">Scope</a>

---

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktg.TechnicalAssetProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

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
| <code><a href="#cdktg.TrustBoundaryProps.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |

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

##### `tags`<sup>Optional</sup> <a name="tags" id="cdktg.TrustBoundaryProps.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

## Classes <a name="Classes" id="Classes"></a>

### AbuseCase <a name="AbuseCase" id="cdktg.AbuseCase"></a>

#### Initializers <a name="Initializers" id="cdktg.AbuseCase.Initializer"></a>

```typescript
import { AbuseCase } from 'cdktg'

new AbuseCase(props: AbuseCaseProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.AbuseCase.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.AbuseCaseProps">AbuseCaseProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.AbuseCase.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.AbuseCaseProps">AbuseCaseProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.AbuseCase.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.AbuseCase.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.AbuseCase.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdktg.AbuseCase.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.AbuseCase.property.CPU_CYCLE_THEFT">CPU_CYCLE_THEFT</a></code> | <code><a href="#cdktg.AbuseCase">AbuseCase</a></code> | *No description.* |
| <code><a href="#cdktg.AbuseCase.property.DENIAL_OF_SERVICE">DENIAL_OF_SERVICE</a></code> | <code><a href="#cdktg.AbuseCase">AbuseCase</a></code> | *No description.* |
| <code><a href="#cdktg.AbuseCase.property.IDENTITY_THEFT">IDENTITY_THEFT</a></code> | <code><a href="#cdktg.AbuseCase">AbuseCase</a></code> | *No description.* |
| <code><a href="#cdktg.AbuseCase.property.PII_THEFT">PII_THEFT</a></code> | <code><a href="#cdktg.AbuseCase">AbuseCase</a></code> | *No description.* |
| <code><a href="#cdktg.AbuseCase.property.RANSOMWARE">RANSOMWARE</a></code> | <code><a href="#cdktg.AbuseCase">AbuseCase</a></code> | *No description.* |

---

##### `CPU_CYCLE_THEFT`<sup>Required</sup> <a name="CPU_CYCLE_THEFT" id="cdktg.AbuseCase.property.CPU_CYCLE_THEFT"></a>

```typescript
public readonly CPU_CYCLE_THEFT: AbuseCase;
```

- *Type:* <a href="#cdktg.AbuseCase">AbuseCase</a>

---

##### `DENIAL_OF_SERVICE`<sup>Required</sup> <a name="DENIAL_OF_SERVICE" id="cdktg.AbuseCase.property.DENIAL_OF_SERVICE"></a>

```typescript
public readonly DENIAL_OF_SERVICE: AbuseCase;
```

- *Type:* <a href="#cdktg.AbuseCase">AbuseCase</a>

---

##### `IDENTITY_THEFT`<sup>Required</sup> <a name="IDENTITY_THEFT" id="cdktg.AbuseCase.property.IDENTITY_THEFT"></a>

```typescript
public readonly IDENTITY_THEFT: AbuseCase;
```

- *Type:* <a href="#cdktg.AbuseCase">AbuseCase</a>

---

##### `PII_THEFT`<sup>Required</sup> <a name="PII_THEFT" id="cdktg.AbuseCase.property.PII_THEFT"></a>

```typescript
public readonly PII_THEFT: AbuseCase;
```

- *Type:* <a href="#cdktg.AbuseCase">AbuseCase</a>

---

##### `RANSOMWARE`<sup>Required</sup> <a name="RANSOMWARE" id="cdktg.AbuseCase.property.RANSOMWARE"></a>

```typescript
public readonly RANSOMWARE: AbuseCase;
```

- *Type:* <a href="#cdktg.AbuseCase">AbuseCase</a>

---

### Annotations <a name="Annotations" id="cdktg.Annotations"></a>

Includes API for attaching annotations such as warning messages to constructs.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Annotations.addError">addError</a></code> | Adds an { "error": <message> } metadata entry to this construct. |
| <code><a href="#cdktg.Annotations.addInfo">addInfo</a></code> | Adds an info metadata entry to this construct. |
| <code><a href="#cdktg.Annotations.addWarning">addWarning</a></code> | Adds a warning metadata entry to this construct. |

---

##### `addError` <a name="addError" id="cdktg.Annotations.addError"></a>

```typescript
public addError(message: string): void
```

Adds an { "error": <message> } metadata entry to this construct.

The toolkit will fail synthesis when errors are reported.

###### `message`<sup>Required</sup> <a name="message" id="cdktg.Annotations.addError.parameter.message"></a>

- *Type:* string

The error message.

---

##### `addInfo` <a name="addInfo" id="cdktg.Annotations.addInfo"></a>

```typescript
public addInfo(message: string): void
```

Adds an info metadata entry to this construct.

The CLI will display the info message when apps are synthesized.

###### `message`<sup>Required</sup> <a name="message" id="cdktg.Annotations.addInfo.parameter.message"></a>

- *Type:* string

The info message.

---

##### `addWarning` <a name="addWarning" id="cdktg.Annotations.addWarning"></a>

```typescript
public addWarning(message: string): void
```

Adds a warning metadata entry to this construct.

The CLI will display the warning when an app is synthesized.
In a future release the CLI might introduce a --strict flag which
will then fail the synthesis if it encounters a warning.

###### `message`<sup>Required</sup> <a name="message" id="cdktg.Annotations.addWarning.parameter.message"></a>

- *Type:* string

The warning message.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Annotations.of">of</a></code> | Returns the annotations API for a construct scope. |

---

##### `of` <a name="of" id="cdktg.Annotations.of"></a>

```typescript
import { Annotations } from 'cdktg'

Annotations.of(scope: IConstruct)
```

Returns the annotations API for a construct scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktg.Annotations.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

The scope.

---



### Aspects <a name="Aspects" id="cdktg.Aspects"></a>

Aspects can be applied to CDK tree scopes and can operate on the tree before synthesis.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Aspects.add">add</a></code> | Adds an aspect to apply this scope before synthesis. |

---

##### `add` <a name="add" id="cdktg.Aspects.add"></a>

```typescript
public add(aspect: IAspect): void
```

Adds an aspect to apply this scope before synthesis.

###### `aspect`<sup>Required</sup> <a name="aspect" id="cdktg.Aspects.add.parameter.aspect"></a>

- *Type:* <a href="#cdktg.IAspect">IAspect</a>

The aspect to add.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Aspects.of">of</a></code> | Returns the `Aspects` object associated with a construct scope. |

---

##### `of` <a name="of" id="cdktg.Aspects.of"></a>

```typescript
import { Aspects } from 'cdktg'

Aspects.of(scope: IConstruct)
```

Returns the `Aspects` object associated with a construct scope.

###### `scope`<sup>Required</sup> <a name="scope" id="cdktg.Aspects.of.parameter.scope"></a>

- *Type:* constructs.IConstruct

The scope for which these aspects will apply.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Aspects.property.all">all</a></code> | <code><a href="#cdktg.IAspect">IAspect</a>[]</code> | The list of aspects which were directly applied on this scope. |

---

##### `all`<sup>Required</sup> <a name="all" id="cdktg.Aspects.property.all"></a>

```typescript
public readonly all: IAspect[];
```

- *Type:* <a href="#cdktg.IAspect">IAspect</a>[]

The list of aspects which were directly applied on this scope.

---


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
| <code><a href="#cdktg.Communication.receives">receives</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.sends">sends</a></code> | *No description.* |

---

##### `receives` <a name="receives" id="cdktg.Communication.receives"></a>

```typescript
public receives(assets: DataAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.Communication.receives.parameter.assets"></a>

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---

##### `sends` <a name="sends" id="cdktg.Communication.sends"></a>

```typescript
public sends(assets: DataAsset): void
```

###### `assets`<sup>Required</sup> <a name="assets" id="cdktg.Communication.sends.parameter.assets"></a>

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Communication.property.authentication">authentication</a></code> | <code><a href="#cdktg.Authentication">Authentication</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.property.authorization">authorization</a></code> | <code><a href="#cdktg.Authorization">Authorization</a></code> | *No description.* |
| <code><a href="#cdktg.Communication.property.caller">caller</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a></code> | *No description.* |
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

##### `caller`<sup>Required</sup> <a name="caller" id="cdktg.Communication.property.caller"></a>

```typescript
public readonly caller: TechnicalAsset;
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

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


### Image <a name="Image" id="cdktg.Image"></a>

#### Initializers <a name="Initializers" id="cdktg.Image.Initializer"></a>

```typescript
import { Image } from 'cdktg'

new Image(filePath: string, title: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Image.Initializer.parameter.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Image.Initializer.parameter.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="cdktg.Image.Initializer.parameter.filePath"></a>

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="cdktg.Image.Initializer.parameter.title"></a>

- *Type:* string

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Image.property.filePath">filePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Image.property.title">title</a></code> | <code>string</code> | *No description.* |

---

##### `filePath`<sup>Required</sup> <a name="filePath" id="cdktg.Image.property.filePath"></a>

```typescript
public readonly filePath: string;
```

- *Type:* string

---

##### `title`<sup>Required</sup> <a name="title" id="cdktg.Image.property.title"></a>

```typescript
public readonly title: string;
```

- *Type:* string

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

- *Implements:* <a href="#cdktg.IManifest">IManifest</a>

#### Initializers <a name="Initializers" id="cdktg.Manifest.Initializer"></a>

```typescript
import { Manifest } from 'cdktg'

new Manifest(version: string, outdir: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Manifest.Initializer.parameter.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Manifest.Initializer.parameter.outdir">outdir</a></code> | <code>string</code> | *No description.* |

---

##### `version`<sup>Required</sup> <a name="version" id="cdktg.Manifest.Initializer.parameter.version"></a>

- *Type:* string

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdktg.Manifest.Initializer.parameter.outdir"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Manifest.buildManifest">buildManifest</a></code> | *No description.* |
| <code><a href="#cdktg.Manifest.forModel">forModel</a></code> | *No description.* |
| <code><a href="#cdktg.Manifest.writeToFile">writeToFile</a></code> | *No description.* |

---

##### `buildManifest` <a name="buildManifest" id="cdktg.Manifest.buildManifest"></a>

```typescript
public buildManifest(): IManifest
```

##### `forModel` <a name="forModel" id="cdktg.Manifest.forModel"></a>

```typescript
public forModel(model: Model): ModelManifest
```

###### `model`<sup>Required</sup> <a name="model" id="cdktg.Manifest.forModel.parameter.model"></a>

- *Type:* <a href="#cdktg.Model">Model</a>

---

##### `writeToFile` <a name="writeToFile" id="cdktg.Manifest.writeToFile"></a>

```typescript
public writeToFile(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Manifest.fromPath">fromPath</a></code> | *No description.* |

---

##### `fromPath` <a name="fromPath" id="cdktg.Manifest.fromPath"></a>

```typescript
import { Manifest } from 'cdktg'

Manifest.fromPath(dir: string)
```

###### `dir`<sup>Required</sup> <a name="dir" id="cdktg.Manifest.fromPath.parameter.dir"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Manifest.property.models">models</a></code> | <code>{[ key: string ]: <a href="#cdktg.ModelManifest">ModelManifest</a>}</code> | *No description.* |
| <code><a href="#cdktg.Manifest.property.outdir">outdir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Manifest.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `models`<sup>Required</sup> <a name="models" id="cdktg.Manifest.property.models"></a>

```typescript
public readonly models: {[ key: string ]: ModelManifest};
```

- *Type:* {[ key: string ]: <a href="#cdktg.ModelManifest">ModelManifest</a>}

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdktg.Manifest.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="cdktg.Manifest.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Manifest.property.fileName">fileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Manifest.property.modelsFolder">modelsFolder</a></code> | <code>string</code> | *No description.* |

---

##### `fileName`<sup>Required</sup> <a name="fileName" id="cdktg.Manifest.property.fileName"></a>

```typescript
public readonly fileName: string;
```

- *Type:* string

---

##### `modelsFolder`<sup>Required</sup> <a name="modelsFolder" id="cdktg.Manifest.property.modelsFolder"></a>

```typescript
public readonly modelsFolder: string;
```

- *Type:* string

---

### ModelSynthesizer <a name="ModelSynthesizer" id="cdktg.ModelSynthesizer"></a>

- *Implements:* <a href="#cdktg.IModelSynthesizer">IModelSynthesizer</a>

#### Initializers <a name="Initializers" id="cdktg.ModelSynthesizer.Initializer"></a>

```typescript
import { ModelSynthesizer } from 'cdktg'

new ModelSynthesizer(model: Model, continueOnErrorAnnotations?: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.ModelSynthesizer.Initializer.parameter.model">model</a></code> | <code><a href="#cdktg.Model">Model</a></code> | *No description.* |
| <code><a href="#cdktg.ModelSynthesizer.Initializer.parameter.continueOnErrorAnnotations">continueOnErrorAnnotations</a></code> | <code>boolean</code> | *No description.* |

---

##### `model`<sup>Required</sup> <a name="model" id="cdktg.ModelSynthesizer.Initializer.parameter.model"></a>

- *Type:* <a href="#cdktg.Model">Model</a>

---

##### `continueOnErrorAnnotations`<sup>Optional</sup> <a name="continueOnErrorAnnotations" id="cdktg.ModelSynthesizer.Initializer.parameter.continueOnErrorAnnotations"></a>

- *Type:* boolean

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.ModelSynthesizer.synthesize">synthesize</a></code> | Synthesize the associated model to the session. |

---

##### `synthesize` <a name="synthesize" id="cdktg.ModelSynthesizer.synthesize"></a>

```typescript
public synthesize(session: ISynthesisSession): void
```

Synthesize the associated model to the session.

###### `session`<sup>Required</sup> <a name="session" id="cdktg.ModelSynthesizer.synthesize.parameter.session"></a>

- *Type:* <a href="#cdktg.ISynthesisSession">ISynthesisSession</a>

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


### Overview <a name="Overview" id="cdktg.Overview"></a>

#### Initializers <a name="Initializers" id="cdktg.Overview.Initializer"></a>

```typescript
import { Overview } from 'cdktg'

new Overview(props: OverviewProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Overview.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.OverviewProps">OverviewProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.Overview.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.OverviewProps">OverviewProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Overview.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Overview.property.images">images</a></code> | <code><a href="#cdktg.Image">Image</a>[]</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.Overview.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `images`<sup>Optional</sup> <a name="images" id="cdktg.Overview.property.images"></a>

```typescript
public readonly images: Image[];
```

- *Type:* <a href="#cdktg.Image">Image</a>[]

---


### Risk <a name="Risk" id="cdktg.Risk"></a>

#### Initializers <a name="Initializers" id="cdktg.Risk.Initializer"></a>

```typescript
import { Risk } from 'cdktg'

new Risk(id: string, props: RiskProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Risk.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Risk.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.RiskProps">RiskProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.Risk.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.Risk.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.RiskProps">RiskProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.Risk.property.dataBreachProbability">dataBreachProbability</a></code> | <code><a href="#cdktg.DataBreachProbability">DataBreachProbability</a></code> | *No description.* |
| <code><a href="#cdktg.Risk.property.dataBreachTechnicalAssets">dataBreachTechnicalAssets</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a>[]</code> | *No description.* |
| <code><a href="#cdktg.Risk.property.exploitationImpact">exploitationImpact</a></code> | <code><a href="#cdktg.ExploitationImpact">ExploitationImpact</a></code> | *No description.* |
| <code><a href="#cdktg.Risk.property.exploitationLikelihood">exploitationLikelihood</a></code> | <code><a href="#cdktg.ExploitationLikelihood">ExploitationLikelihood</a></code> | *No description.* |
| <code><a href="#cdktg.Risk.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.Risk.property.severity">severity</a></code> | <code><a href="#cdktg.Severity">Severity</a></code> | *No description.* |
| <code><a href="#cdktg.Risk.property.mostRelevantCommunicationLink">mostRelevantCommunicationLink</a></code> | <code><a href="#cdktg.Communication">Communication</a></code> | *No description.* |
| <code><a href="#cdktg.Risk.property.mostRelevantDataAsset">mostRelevantDataAsset</a></code> | <code><a href="#cdktg.DataAsset">DataAsset</a></code> | *No description.* |
| <code><a href="#cdktg.Risk.property.mostRelevantSharedRuntime">mostRelevantSharedRuntime</a></code> | <code><a href="#cdktg.SharedRuntime">SharedRuntime</a></code> | *No description.* |
| <code><a href="#cdktg.Risk.property.mostRelevantTechnicalAsset">mostRelevantTechnicalAsset</a></code> | <code><a href="#cdktg.TechnicalAsset">TechnicalAsset</a></code> | *No description.* |
| <code><a href="#cdktg.Risk.property.mostRelevantTrustBoundary">mostRelevantTrustBoundary</a></code> | <code><a href="#cdktg.TrustBoundary">TrustBoundary</a></code> | *No description.* |

---

##### `dataBreachProbability`<sup>Required</sup> <a name="dataBreachProbability" id="cdktg.Risk.property.dataBreachProbability"></a>

```typescript
public readonly dataBreachProbability: DataBreachProbability;
```

- *Type:* <a href="#cdktg.DataBreachProbability">DataBreachProbability</a>

---

##### `dataBreachTechnicalAssets`<sup>Required</sup> <a name="dataBreachTechnicalAssets" id="cdktg.Risk.property.dataBreachTechnicalAssets"></a>

```typescript
public readonly dataBreachTechnicalAssets: TechnicalAsset[];
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>[]

---

##### `exploitationImpact`<sup>Required</sup> <a name="exploitationImpact" id="cdktg.Risk.property.exploitationImpact"></a>

```typescript
public readonly exploitationImpact: ExploitationImpact;
```

- *Type:* <a href="#cdktg.ExploitationImpact">ExploitationImpact</a>

---

##### `exploitationLikelihood`<sup>Required</sup> <a name="exploitationLikelihood" id="cdktg.Risk.property.exploitationLikelihood"></a>

```typescript
public readonly exploitationLikelihood: ExploitationLikelihood;
```

- *Type:* <a href="#cdktg.ExploitationLikelihood">ExploitationLikelihood</a>

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.Risk.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `severity`<sup>Required</sup> <a name="severity" id="cdktg.Risk.property.severity"></a>

```typescript
public readonly severity: Severity;
```

- *Type:* <a href="#cdktg.Severity">Severity</a>

---

##### `mostRelevantCommunicationLink`<sup>Optional</sup> <a name="mostRelevantCommunicationLink" id="cdktg.Risk.property.mostRelevantCommunicationLink"></a>

```typescript
public readonly mostRelevantCommunicationLink: Communication;
```

- *Type:* <a href="#cdktg.Communication">Communication</a>

---

##### `mostRelevantDataAsset`<sup>Optional</sup> <a name="mostRelevantDataAsset" id="cdktg.Risk.property.mostRelevantDataAsset"></a>

```typescript
public readonly mostRelevantDataAsset: DataAsset;
```

- *Type:* <a href="#cdktg.DataAsset">DataAsset</a>

---

##### `mostRelevantSharedRuntime`<sup>Optional</sup> <a name="mostRelevantSharedRuntime" id="cdktg.Risk.property.mostRelevantSharedRuntime"></a>

```typescript
public readonly mostRelevantSharedRuntime: SharedRuntime;
```

- *Type:* <a href="#cdktg.SharedRuntime">SharedRuntime</a>

---

##### `mostRelevantTechnicalAsset`<sup>Optional</sup> <a name="mostRelevantTechnicalAsset" id="cdktg.Risk.property.mostRelevantTechnicalAsset"></a>

```typescript
public readonly mostRelevantTechnicalAsset: TechnicalAsset;
```

- *Type:* <a href="#cdktg.TechnicalAsset">TechnicalAsset</a>

---

##### `mostRelevantTrustBoundary`<sup>Optional</sup> <a name="mostRelevantTrustBoundary" id="cdktg.Risk.property.mostRelevantTrustBoundary"></a>

```typescript
public readonly mostRelevantTrustBoundary: TrustBoundary;
```

- *Type:* <a href="#cdktg.TrustBoundary">TrustBoundary</a>

---


### RiskTracking <a name="RiskTracking" id="cdktg.RiskTracking"></a>

#### Initializers <a name="Initializers" id="cdktg.RiskTracking.Initializer"></a>

```typescript
import { RiskTracking } from 'cdktg'

new RiskTracking(id: string, props: RiskTrackingProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.RiskTracking.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskTracking.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.RiskTrackingProps">RiskTrackingProps</a></code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.RiskTracking.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.RiskTracking.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.RiskTrackingProps">RiskTrackingProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.RiskTracking.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskTracking.property.status">status</a></code> | <code><a href="#cdktg.RiskTrackingStatus">RiskTrackingStatus</a></code> | *No description.* |
| <code><a href="#cdktg.RiskTracking.property.checkedBy">checkedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskTracking.property.date">date</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskTracking.property.justification">justification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.RiskTracking.property.ticket">ticket</a></code> | <code>string</code> | *No description.* |

---

##### `id`<sup>Required</sup> <a name="id" id="cdktg.RiskTracking.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="cdktg.RiskTracking.property.status"></a>

```typescript
public readonly status: RiskTrackingStatus;
```

- *Type:* <a href="#cdktg.RiskTrackingStatus">RiskTrackingStatus</a>

---

##### `checkedBy`<sup>Optional</sup> <a name="checkedBy" id="cdktg.RiskTracking.property.checkedBy"></a>

```typescript
public readonly checkedBy: string;
```

- *Type:* string

---

##### `date`<sup>Optional</sup> <a name="date" id="cdktg.RiskTracking.property.date"></a>

```typescript
public readonly date: string;
```

- *Type:* string

---

##### `justification`<sup>Optional</sup> <a name="justification" id="cdktg.RiskTracking.property.justification"></a>

```typescript
public readonly justification: string;
```

- *Type:* string

---

##### `ticket`<sup>Optional</sup> <a name="ticket" id="cdktg.RiskTracking.property.ticket"></a>

```typescript
public readonly ticket: string;
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


### SecurityRequirement <a name="SecurityRequirement" id="cdktg.SecurityRequirement"></a>

#### Initializers <a name="Initializers" id="cdktg.SecurityRequirement.Initializer"></a>

```typescript
import { SecurityRequirement } from 'cdktg'

new SecurityRequirement(props: SecurityRequirementProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.SecurityRequirement.Initializer.parameter.props">props</a></code> | <code><a href="#cdktg.SecurityRequirementProps">SecurityRequirementProps</a></code> | *No description.* |

---

##### `props`<sup>Required</sup> <a name="props" id="cdktg.SecurityRequirement.Initializer.parameter.props"></a>

- *Type:* <a href="#cdktg.SecurityRequirementProps">SecurityRequirementProps</a>

---



#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.SecurityRequirement.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktg.SecurityRequirement.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `description`<sup>Required</sup> <a name="description" id="cdktg.SecurityRequirement.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="cdktg.SecurityRequirement.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.SecurityRequirement.property.INPUT_VALIDATION">INPUT_VALIDATION</a></code> | <code><a href="#cdktg.SecurityRequirement">SecurityRequirement</a></code> | *No description.* |
| <code><a href="#cdktg.SecurityRequirement.property.SECURING_ADMINISTRATIVE_ACCESS">SECURING_ADMINISTRATIVE_ACCESS</a></code> | <code><a href="#cdktg.SecurityRequirement">SecurityRequirement</a></code> | *No description.* |

---

##### `INPUT_VALIDATION`<sup>Required</sup> <a name="INPUT_VALIDATION" id="cdktg.SecurityRequirement.property.INPUT_VALIDATION"></a>

```typescript
public readonly INPUT_VALIDATION: SecurityRequirement;
```

- *Type:* <a href="#cdktg.SecurityRequirement">SecurityRequirement</a>

---

##### `SECURING_ADMINISTRATIVE_ACCESS`<sup>Required</sup> <a name="SECURING_ADMINISTRATIVE_ACCESS" id="cdktg.SecurityRequirement.property.SECURING_ADMINISTRATIVE_ACCESS"></a>

```typescript
public readonly SECURING_ADMINISTRATIVE_ACCESS: SecurityRequirement;
```

- *Type:* <a href="#cdktg.SecurityRequirement">SecurityRequirement</a>

---

## Protocols <a name="Protocols" id="Protocols"></a>

### IAspect <a name="IAspect" id="cdktg.IAspect"></a>

- *Implemented By:* <a href="#cdktg.IAspect">IAspect</a>

Represents an Aspect.

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.IAspect.visit">visit</a></code> | All aspects can visit an IConstruct. |

---

##### `visit` <a name="visit" id="cdktg.IAspect.visit"></a>

```typescript
public visit(node: IConstruct): void
```

All aspects can visit an IConstruct.

###### `node`<sup>Required</sup> <a name="node" id="cdktg.IAspect.visit.parameter.node"></a>

- *Type:* constructs.IConstruct

---


### IManifest <a name="IManifest" id="cdktg.IManifest"></a>

- *Implemented By:* <a href="#cdktg.Manifest">Manifest</a>, <a href="#cdktg.IManifest">IManifest</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.IManifest.property.models">models</a></code> | <code>{[ key: string ]: <a href="#cdktg.ModelManifest">ModelManifest</a>}</code> | *No description.* |
| <code><a href="#cdktg.IManifest.property.version">version</a></code> | <code>string</code> | *No description.* |

---

##### `models`<sup>Required</sup> <a name="models" id="cdktg.IManifest.property.models"></a>

```typescript
public readonly models: {[ key: string ]: ModelManifest};
```

- *Type:* {[ key: string ]: <a href="#cdktg.ModelManifest">ModelManifest</a>}

---

##### `version`<sup>Required</sup> <a name="version" id="cdktg.IManifest.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

### IModelSynthesizer <a name="IModelSynthesizer" id="cdktg.IModelSynthesizer"></a>

- *Implemented By:* <a href="#cdktg.ModelSynthesizer">ModelSynthesizer</a>, <a href="#cdktg.IModelSynthesizer">IModelSynthesizer</a>

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.IModelSynthesizer.synthesize">synthesize</a></code> | Synthesize the associated model to the session. |

---

##### `synthesize` <a name="synthesize" id="cdktg.IModelSynthesizer.synthesize"></a>

```typescript
public synthesize(session: ISynthesisSession): void
```

Synthesize the associated model to the session.

###### `session`<sup>Required</sup> <a name="session" id="cdktg.IModelSynthesizer.synthesize.parameter.session"></a>

- *Type:* <a href="#cdktg.ISynthesisSession">ISynthesisSession</a>

---


### ISynthesisSession <a name="ISynthesisSession" id="cdktg.ISynthesisSession"></a>

- *Implemented By:* <a href="#cdktg.ISynthesisSession">ISynthesisSession</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktg.ISynthesisSession.property.manifest">manifest</a></code> | <code><a href="#cdktg.Manifest">Manifest</a></code> | *No description.* |
| <code><a href="#cdktg.ISynthesisSession.property.outdir">outdir</a></code> | <code>string</code> | The output directory for this synthesis session. |
| <code><a href="#cdktg.ISynthesisSession.property.skipValidation">skipValidation</a></code> | <code>boolean</code> | *No description.* |

---

##### `manifest`<sup>Required</sup> <a name="manifest" id="cdktg.ISynthesisSession.property.manifest"></a>

```typescript
public readonly manifest: Manifest;
```

- *Type:* <a href="#cdktg.Manifest">Manifest</a>

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="cdktg.ISynthesisSession.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

The output directory for this synthesis session.

---

##### `skipValidation`<sup>Optional</sup> <a name="skipValidation" id="cdktg.ISynthesisSession.property.skipValidation"></a>

```typescript
public readonly skipValidation: boolean;
```

- *Type:* boolean

---

## Enums <a name="Enums" id="Enums"></a>

### AnnotationMetadataEntryType <a name="AnnotationMetadataEntryType" id="cdktg.AnnotationMetadataEntryType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.AnnotationMetadataEntryType.INFO">INFO</a></code> | *No description.* |
| <code><a href="#cdktg.AnnotationMetadataEntryType.WARN">WARN</a></code> | *No description.* |
| <code><a href="#cdktg.AnnotationMetadataEntryType.ERROR">ERROR</a></code> | *No description.* |

---

##### `INFO` <a name="INFO" id="cdktg.AnnotationMetadataEntryType.INFO"></a>

---


##### `WARN` <a name="WARN" id="cdktg.AnnotationMetadataEntryType.WARN"></a>

---


##### `ERROR` <a name="ERROR" id="cdktg.AnnotationMetadataEntryType.ERROR"></a>

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


### DataBreachProbability <a name="DataBreachProbability" id="cdktg.DataBreachProbability"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.DataBreachProbability.IMPROBABLE">IMPROBABLE</a></code> | *No description.* |
| <code><a href="#cdktg.DataBreachProbability.POSSIBLE">POSSIBLE</a></code> | *No description.* |
| <code><a href="#cdktg.DataBreachProbability.PROBABLE">PROBABLE</a></code> | *No description.* |

---

##### `IMPROBABLE` <a name="IMPROBABLE" id="cdktg.DataBreachProbability.IMPROBABLE"></a>

---


##### `POSSIBLE` <a name="POSSIBLE" id="cdktg.DataBreachProbability.POSSIBLE"></a>

---


##### `PROBABLE` <a name="PROBABLE" id="cdktg.DataBreachProbability.PROBABLE"></a>

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


### ExploitationImpact <a name="ExploitationImpact" id="cdktg.ExploitationImpact"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.ExploitationImpact.LOW">LOW</a></code> | *No description.* |
| <code><a href="#cdktg.ExploitationImpact.MEDIUM">MEDIUM</a></code> | *No description.* |
| <code><a href="#cdktg.ExploitationImpact.HIGH">HIGH</a></code> | *No description.* |
| <code><a href="#cdktg.ExploitationImpact.VERY_HIGH">VERY_HIGH</a></code> | *No description.* |

---

##### `LOW` <a name="LOW" id="cdktg.ExploitationImpact.LOW"></a>

---


##### `MEDIUM` <a name="MEDIUM" id="cdktg.ExploitationImpact.MEDIUM"></a>

---


##### `HIGH` <a name="HIGH" id="cdktg.ExploitationImpact.HIGH"></a>

---


##### `VERY_HIGH` <a name="VERY_HIGH" id="cdktg.ExploitationImpact.VERY_HIGH"></a>

---


### ExploitationLikelihood <a name="ExploitationLikelihood" id="cdktg.ExploitationLikelihood"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.ExploitationLikelihood.UNLIKELY">UNLIKELY</a></code> | *No description.* |
| <code><a href="#cdktg.ExploitationLikelihood.LIKELY">LIKELY</a></code> | *No description.* |
| <code><a href="#cdktg.ExploitationLikelihood.VERY_LIKELY">VERY_LIKELY</a></code> | *No description.* |
| <code><a href="#cdktg.ExploitationLikelihood.FREQUENT">FREQUENT</a></code> | *No description.* |

---

##### `UNLIKELY` <a name="UNLIKELY" id="cdktg.ExploitationLikelihood.UNLIKELY"></a>

---


##### `LIKELY` <a name="LIKELY" id="cdktg.ExploitationLikelihood.LIKELY"></a>

---


##### `VERY_LIKELY` <a name="VERY_LIKELY" id="cdktg.ExploitationLikelihood.VERY_LIKELY"></a>

---


##### `FREQUENT` <a name="FREQUENT" id="cdktg.ExploitationLikelihood.FREQUENT"></a>

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


### RiskFunction <a name="RiskFunction" id="cdktg.RiskFunction"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.RiskFunction.BUSINESS_SIDE">BUSINESS_SIDE</a></code> | *No description.* |
| <code><a href="#cdktg.RiskFunction.ARCHITECTURE">ARCHITECTURE</a></code> | *No description.* |
| <code><a href="#cdktg.RiskFunction.DEVELOPMENT">DEVELOPMENT</a></code> | *No description.* |
| <code><a href="#cdktg.RiskFunction.OPERATIONS">OPERATIONS</a></code> | *No description.* |

---

##### `BUSINESS_SIDE` <a name="BUSINESS_SIDE" id="cdktg.RiskFunction.BUSINESS_SIDE"></a>

---


##### `ARCHITECTURE` <a name="ARCHITECTURE" id="cdktg.RiskFunction.ARCHITECTURE"></a>

---


##### `DEVELOPMENT` <a name="DEVELOPMENT" id="cdktg.RiskFunction.DEVELOPMENT"></a>

---


##### `OPERATIONS` <a name="OPERATIONS" id="cdktg.RiskFunction.OPERATIONS"></a>

---


### RiskTrackingStatus <a name="RiskTrackingStatus" id="cdktg.RiskTrackingStatus"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.RiskTrackingStatus.UNCHECKED">UNCHECKED</a></code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingStatus.IN_DISCUSSION">IN_DISCUSSION</a></code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingStatus.ACCEPTED">ACCEPTED</a></code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingStatus.IN_PROGRESS">IN_PROGRESS</a></code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingStatus.MITIGATED">MITIGATED</a></code> | *No description.* |
| <code><a href="#cdktg.RiskTrackingStatus.FALSE_POSITIVE">FALSE_POSITIVE</a></code> | *No description.* |

---

##### `UNCHECKED` <a name="UNCHECKED" id="cdktg.RiskTrackingStatus.UNCHECKED"></a>

---


##### `IN_DISCUSSION` <a name="IN_DISCUSSION" id="cdktg.RiskTrackingStatus.IN_DISCUSSION"></a>

---


##### `ACCEPTED` <a name="ACCEPTED" id="cdktg.RiskTrackingStatus.ACCEPTED"></a>

---


##### `IN_PROGRESS` <a name="IN_PROGRESS" id="cdktg.RiskTrackingStatus.IN_PROGRESS"></a>

---


##### `MITIGATED` <a name="MITIGATED" id="cdktg.RiskTrackingStatus.MITIGATED"></a>

---


##### `FALSE_POSITIVE` <a name="FALSE_POSITIVE" id="cdktg.RiskTrackingStatus.FALSE_POSITIVE"></a>

---


### Severity <a name="Severity" id="cdktg.Severity"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Severity.LOW">LOW</a></code> | *No description.* |
| <code><a href="#cdktg.Severity.MEDIUM">MEDIUM</a></code> | *No description.* |
| <code><a href="#cdktg.Severity.ELEVATED">ELEVATED</a></code> | *No description.* |
| <code><a href="#cdktg.Severity.HIGH">HIGH</a></code> | *No description.* |
| <code><a href="#cdktg.Severity.CRITICAL">CRITICAL</a></code> | *No description.* |

---

##### `LOW` <a name="LOW" id="cdktg.Severity.LOW"></a>

---


##### `MEDIUM` <a name="MEDIUM" id="cdktg.Severity.MEDIUM"></a>

---


##### `ELEVATED` <a name="ELEVATED" id="cdktg.Severity.ELEVATED"></a>

---


##### `HIGH` <a name="HIGH" id="cdktg.Severity.HIGH"></a>

---


##### `CRITICAL` <a name="CRITICAL" id="cdktg.Severity.CRITICAL"></a>

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


### Stride <a name="Stride" id="cdktg.Stride"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.Stride.SPOOFING">SPOOFING</a></code> | *No description.* |
| <code><a href="#cdktg.Stride.TAMPERING">TAMPERING</a></code> | *No description.* |
| <code><a href="#cdktg.Stride.REPUDIATION">REPUDIATION</a></code> | *No description.* |
| <code><a href="#cdktg.Stride.INFORMATION_DISCLOSURE">INFORMATION_DISCLOSURE</a></code> | *No description.* |
| <code><a href="#cdktg.Stride.DENIAL_OF_SERVICE">DENIAL_OF_SERVICE</a></code> | *No description.* |
| <code><a href="#cdktg.Stride.ELEVATION_OF_PRIVILEGE">ELEVATION_OF_PRIVILEGE</a></code> | *No description.* |

---

##### `SPOOFING` <a name="SPOOFING" id="cdktg.Stride.SPOOFING"></a>

---


##### `TAMPERING` <a name="TAMPERING" id="cdktg.Stride.TAMPERING"></a>

---


##### `REPUDIATION` <a name="REPUDIATION" id="cdktg.Stride.REPUDIATION"></a>

---


##### `INFORMATION_DISCLOSURE` <a name="INFORMATION_DISCLOSURE" id="cdktg.Stride.INFORMATION_DISCLOSURE"></a>

---


##### `DENIAL_OF_SERVICE` <a name="DENIAL_OF_SERVICE" id="cdktg.Stride.DENIAL_OF_SERVICE"></a>

---


##### `ELEVATION_OF_PRIVILEGE` <a name="ELEVATION_OF_PRIVILEGE" id="cdktg.Stride.ELEVATION_OF_PRIVILEGE"></a>

---


### TechnicalAssetType <a name="TechnicalAssetType" id="cdktg.TechnicalAssetType"></a>

#### Members <a name="Members" id="Members"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktg.TechnicalAssetType.EXTERNAL_ENTITY">EXTERNAL_ENTITY</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetType.PROCESS">PROCESS</a></code> | *No description.* |
| <code><a href="#cdktg.TechnicalAssetType.DATASTORE">DATASTORE</a></code> | *No description.* |

---

##### `EXTERNAL_ENTITY` <a name="EXTERNAL_ENTITY" id="cdktg.TechnicalAssetType.EXTERNAL_ENTITY"></a>

---


##### `PROCESS` <a name="PROCESS" id="cdktg.TechnicalAssetType.PROCESS"></a>

---


##### `DATASTORE` <a name="DATASTORE" id="cdktg.TechnicalAssetType.DATASTORE"></a>

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

