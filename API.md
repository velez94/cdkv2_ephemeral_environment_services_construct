# CDK Construct for custom ecs Fargate Service


# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Cdkv2EphemeralEnvironmentServices <a name="Cdkv2EphemeralEnvironmentServices" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices"></a>

#### Initializers <a name="Initializers" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.Initializer"></a>

```typescript
import { Cdkv2EphemeralEnvironmentServices } from '@labvel/ecs-fargate-services'

new Cdkv2EphemeralEnvironmentServices(scope: Construct, id: string, props: EcsCustomServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.Initializer.parameter.props">props</a></code> | <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps">EcsCustomServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.Initializer.parameter.props"></a>

- *Type:* <a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps">EcsCustomServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.isConstruct"></a>

```typescript
import { Cdkv2EphemeralEnvironmentServices } from '@labvel/ecs-fargate-services'

Cdkv2EphemeralEnvironmentServices.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.property.importedResources">importedResources</a></code> | <code><a href="#@labvel/ecs-fargate-services.ImportResources">ImportResources</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `importedResources`<sup>Optional</sup> <a name="importedResources" id="@labvel/ecs-fargate-services.Cdkv2EphemeralEnvironmentServices.property.importedResources"></a>

```typescript
public readonly importedResources: ImportResources;
```

- *Type:* <a href="#@labvel/ecs-fargate-services.ImportResources">ImportResources</a>

---


### ImportResources <a name="ImportResources" id="@labvel/ecs-fargate-services.ImportResources"></a>

#### Initializers <a name="Initializers" id="@labvel/ecs-fargate-services.ImportResources.Initializer"></a>

```typescript
import { ImportResources } from '@labvel/ecs-fargate-services'

new ImportResources(scope: Construct, id: string, props: ImportServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.ImportResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.ImportResources.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.ImportResources.Initializer.parameter.props">props</a></code> | <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps">ImportServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@labvel/ecs-fargate-services.ImportResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@labvel/ecs-fargate-services.ImportResources.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@labvel/ecs-fargate-services.ImportResources.Initializer.parameter.props"></a>

- *Type:* <a href="#@labvel/ecs-fargate-services.ImportServiceProps">ImportServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.ImportResources.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@labvel/ecs-fargate-services.ImportResources.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.ImportResources.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@labvel/ecs-fargate-services.ImportResources.isConstruct"></a>

```typescript
import { ImportResources } from '@labvel/ecs-fargate-services'

ImportResources.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@labvel/ecs-fargate-services.ImportResources.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.ImportResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@labvel/ecs-fargate-services.ImportResources.property.importedAlb">importedAlb</a></code> | <code>aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.ImportResources.property.importedCluster">importedCluster</a></code> | <code>aws-cdk-lib.aws_ecs.ICluster</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@labvel/ecs-fargate-services.ImportResources.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `importedAlb`<sup>Required</sup> <a name="importedAlb" id="@labvel/ecs-fargate-services.ImportResources.property.importedAlb"></a>

```typescript
public readonly importedAlb: IApplicationLoadBalancer;
```

- *Type:* aws-cdk-lib.aws_elasticloadbalancingv2.IApplicationLoadBalancer

---

##### `importedCluster`<sup>Required</sup> <a name="importedCluster" id="@labvel/ecs-fargate-services.ImportResources.property.importedCluster"></a>

```typescript
public readonly importedCluster: ICluster;
```

- *Type:* aws-cdk-lib.aws_ecs.ICluster

---


## Structs <a name="Structs" id="Structs"></a>

### EcsCustomServiceProps <a name="EcsCustomServiceProps" id="@labvel/ecs-fargate-services.EcsCustomServiceProps"></a>

#### Initializer <a name="Initializer" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.Initializer"></a>

```typescript
import { EcsCustomServiceProps } from '@labvel/ecs-fargate-services'

const ecsCustomServiceProps: EcsCustomServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.environmentOutputs">environmentOutputs</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.instanceInputs">instanceInputs</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.listenerPort">listenerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.parentEnv">parentEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.EcsCustomServiceProps.property.public">public</a></code> | <code>boolean</code> | *No description.* |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `environmentOutputs`<sup>Required</sup> <a name="environmentOutputs" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.environmentOutputs"></a>

```typescript
public readonly environmentOutputs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `instanceInputs`<sup>Required</sup> <a name="instanceInputs" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.instanceInputs"></a>

```typescript
public readonly instanceInputs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.listenerPort"></a>

```typescript
public readonly listenerPort: number;
```

- *Type:* number

---

##### `parentEnv`<sup>Required</sup> <a name="parentEnv" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.parentEnv"></a>

```typescript
public readonly parentEnv: string;
```

- *Type:* string

---

##### `public`<sup>Required</sup> <a name="public" id="@labvel/ecs-fargate-services.EcsCustomServiceProps.property.public"></a>

```typescript
public readonly public: boolean;
```

- *Type:* boolean

---

### ImportServiceProps <a name="ImportServiceProps" id="@labvel/ecs-fargate-services.ImportServiceProps"></a>

#### Initializer <a name="Initializer" id="@labvel/ecs-fargate-services.ImportServiceProps.Initializer"></a>

```typescript
import { ImportServiceProps } from '@labvel/ecs-fargate-services'

const importServiceProps: ImportServiceProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.analyticsReporting">analyticsReporting</a></code> | <code>boolean</code> | Include runtime versioning information in this Stack. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.crossRegionReferences">crossRegionReferences</a></code> | <code>boolean</code> | Enable this flag to allow native cross region stack references. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.description">description</a></code> | <code>string</code> | A description of the stack. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.env">env</a></code> | <code>aws-cdk-lib.Environment</code> | The AWS environment (account/region) where this stack will be deployed. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.permissionsBoundary">permissionsBoundary</a></code> | <code>aws-cdk-lib.PermissionsBoundary</code> | Options for applying a permissions boundary to all IAM Roles and Users created within this Stage. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.stackName">stackName</a></code> | <code>string</code> | Name to deploy the stack with. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.suppressTemplateIndentation">suppressTemplateIndentation</a></code> | <code>boolean</code> | Enable this flag to suppress indentation in generated CloudFormation templates. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.synthesizer">synthesizer</a></code> | <code>aws-cdk-lib.IStackSynthesizer</code> | Synthesis method to use while deploying this stack. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Stack tags that will be applied to all the taggable resources and the stack itself. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.terminationProtection">terminationProtection</a></code> | <code>boolean</code> | Whether to enable termination protection for this stack. |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.environmentOutputs">environmentOutputs</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.parentEnv">parentEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@labvel/ecs-fargate-services.ImportServiceProps.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |

---

##### `analyticsReporting`<sup>Optional</sup> <a name="analyticsReporting" id="@labvel/ecs-fargate-services.ImportServiceProps.property.analyticsReporting"></a>

```typescript
public readonly analyticsReporting: boolean;
```

- *Type:* boolean
- *Default:* `analyticsReporting` setting of containing `App`, or value of 'aws:cdk:version-reporting' context key

Include runtime versioning information in this Stack.

---

##### `crossRegionReferences`<sup>Optional</sup> <a name="crossRegionReferences" id="@labvel/ecs-fargate-services.ImportServiceProps.property.crossRegionReferences"></a>

```typescript
public readonly crossRegionReferences: boolean;
```

- *Type:* boolean
- *Default:* false

Enable this flag to allow native cross region stack references.

Enabling this will create a CloudFormation custom resource
in both the producing stack and consuming stack in order to perform the export/import

This feature is currently experimental

---

##### `description`<sup>Optional</sup> <a name="description" id="@labvel/ecs-fargate-services.ImportServiceProps.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string
- *Default:* No description.

A description of the stack.

---

##### `env`<sup>Optional</sup> <a name="env" id="@labvel/ecs-fargate-services.ImportServiceProps.property.env"></a>

```typescript
public readonly env: Environment;
```

- *Type:* aws-cdk-lib.Environment
- *Default:* The environment of the containing `Stage` if available, otherwise create the stack will be environment-agnostic.

The AWS environment (account/region) where this stack will be deployed.

Set the `region`/`account` fields of `env` to either a concrete value to
select the indicated environment (recommended for production stacks), or to
the values of environment variables
`CDK_DEFAULT_REGION`/`CDK_DEFAULT_ACCOUNT` to let the target environment
depend on the AWS credentials/configuration that the CDK CLI is executed
under (recommended for development stacks).

If the `Stack` is instantiated inside a `Stage`, any undefined
`region`/`account` fields from `env` will default to the same field on the
encompassing `Stage`, if configured there.

If either `region` or `account` are not set nor inherited from `Stage`, the
Stack will be considered "*environment-agnostic*"". Environment-agnostic
stacks can be deployed to any environment but may not be able to take
advantage of all features of the CDK. For example, they will not be able to
use environmental context lookups such as `ec2.Vpc.fromLookup` and will not
automatically translate Service Principals to the right format based on the
environment's AWS partition, and other such enhancements.

---

*Example*

```typescript
// Use a concrete account and region to deploy this stack to:
// `.account` and `.region` will simply return these values.
new Stack(app, 'Stack1', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  },
});

// Use the CLI's current credentials to determine the target environment:
// `.account` and `.region` will reflect the account+region the CLI
// is configured to use (based on the user CLI credentials)
new Stack(app, 'Stack2', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION
  },
});

// Define multiple stacks stage associated with an environment
const myStage = new Stage(app, 'MyStage', {
  env: {
    account: '123456789012',
    region: 'us-east-1'
  }
});

// both of these stacks will use the stage's account/region:
// `.account` and `.region` will resolve to the concrete values as above
new MyStack(myStage, 'Stack1');
new YourStack(myStage, 'Stack2');

// Define an environment-agnostic stack:
// `.account` and `.region` will resolve to `{ "Ref": "AWS::AccountId" }` and `{ "Ref": "AWS::Region" }` respectively.
// which will only resolve to actual values by CloudFormation during deployment.
new MyStack(app, 'Stack1');
```


##### `permissionsBoundary`<sup>Optional</sup> <a name="permissionsBoundary" id="@labvel/ecs-fargate-services.ImportServiceProps.property.permissionsBoundary"></a>

```typescript
public readonly permissionsBoundary: PermissionsBoundary;
```

- *Type:* aws-cdk-lib.PermissionsBoundary
- *Default:* no permissions boundary is applied

Options for applying a permissions boundary to all IAM Roles and Users created within this Stage.

---

##### `stackName`<sup>Optional</sup> <a name="stackName" id="@labvel/ecs-fargate-services.ImportServiceProps.property.stackName"></a>

```typescript
public readonly stackName: string;
```

- *Type:* string
- *Default:* Derived from construct path.

Name to deploy the stack with.

---

##### `suppressTemplateIndentation`<sup>Optional</sup> <a name="suppressTemplateIndentation" id="@labvel/ecs-fargate-services.ImportServiceProps.property.suppressTemplateIndentation"></a>

```typescript
public readonly suppressTemplateIndentation: boolean;
```

- *Type:* boolean
- *Default:* the value of `@aws-cdk/core:suppressTemplateIndentation`, or `false` if that is not set.

Enable this flag to suppress indentation in generated CloudFormation templates.

If not specified, the value of the `@aws-cdk/core:suppressTemplateIndentation`
context key will be used. If that is not specified, then the
default value `false` will be used.

---

##### `synthesizer`<sup>Optional</sup> <a name="synthesizer" id="@labvel/ecs-fargate-services.ImportServiceProps.property.synthesizer"></a>

```typescript
public readonly synthesizer: IStackSynthesizer;
```

- *Type:* aws-cdk-lib.IStackSynthesizer
- *Default:* The synthesizer specified on `App`, or `DefaultStackSynthesizer` otherwise.

Synthesis method to use while deploying this stack.

The Stack Synthesizer controls aspects of synthesis and deployment,
like how assets are referenced and what IAM roles to use. For more
information, see the README of the main CDK package.

If not specified, the `defaultStackSynthesizer` from `App` will be used.
If that is not specified, `DefaultStackSynthesizer` is used if
`@aws-cdk/core:newStyleStackSynthesis` is set to `true` or the CDK major
version is v2. In CDK v1 `LegacyStackSynthesizer` is the default if no
other synthesizer is specified.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@labvel/ecs-fargate-services.ImportServiceProps.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

Stack tags that will be applied to all the taggable resources and the stack itself.

---

##### `terminationProtection`<sup>Optional</sup> <a name="terminationProtection" id="@labvel/ecs-fargate-services.ImportServiceProps.property.terminationProtection"></a>

```typescript
public readonly terminationProtection: boolean;
```

- *Type:* boolean
- *Default:* false

Whether to enable termination protection for this stack.

---

##### `environmentOutputs`<sup>Required</sup> <a name="environmentOutputs" id="@labvel/ecs-fargate-services.ImportServiceProps.property.environmentOutputs"></a>

```typescript
public readonly environmentOutputs: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `parentEnv`<sup>Required</sup> <a name="parentEnv" id="@labvel/ecs-fargate-services.ImportServiceProps.property.parentEnv"></a>

```typescript
public readonly parentEnv: string;
```

- *Type:* string

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@labvel/ecs-fargate-services.ImportServiceProps.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---



