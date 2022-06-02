

export class OutputParser {
    
    private sceneGraph = [];
    private position: number = 0;

    private recursive = false;
    private listMode  = false;

    public convert(args: string[], commandOutput: string): unknown[] {
        this.parseArgs(args);

        // loop until EOF:
        if (this.listMode) {
            if (this.recursive) {

            } else {

            }
        } else {
            if (this.recursive) {

            } else {

            }
        }

        return this.sceneGraph;
    }


    private parseArgs(args: string[]): void {
        this.recursive = args.includes("R");
        this.listMode  = args.includes("l");
    }

    private nextToken(): void {
        //Do something with current token ?
        this.position += 1;
    }

    private parseStandardBlock(): void {

    }

    private parseListBlock(): void {

    }

    private parseRelativeDirectoryPath(): void {

    }
}

/**
    
# Example standard mode:

    ``` - One block, with no path or total number of directories.
        - Items appear beside each other and below if there are enough of them.
        
        - For this one block:
            check for a single quote: 
                if found:
                    - consume & accumulate tokens until next single quote.
                    - once single quote is found:
                        - add node to scene-graph, with accumulated tokens.

                if no single quote is found:
                    - consume & accumulate tokens until white-space is found.
                    - once white-space is found:
                        - add node to scene-graph, with accumulated tokens.

    ```

    ls
'Domain [╍🌐╍🧭╍]'   index.ts  'Model [╍⬡╍ꙮ╍▦╍]'   spec  'View [╍🌏╍]'

**/
    

/** 

# Example standard mode, recursive:

    ``` - Multiple blocks, including relative path.
        - Items appear beside each other and below, if there are enough of them.

        - For each block:
            - consume tokens until colon is found
            - once colon is found:
                - create node, identified by the directory comprised of the accumulated tokens.
                - run parser for standard-mode, adding the nodes to the directory-node, from the previous step.
                - add the directory node to the scene-graph
    ```

    ls -R
.:
'Domain [╍🌐╍🧭╍]'   index.ts  'Model [╍⬡╍ꙮ╍▦╍]'   spec  'View [╍🌏╍]'

'./Domain [╍🌐╍🧭╍]':
4_0_0_meta.ts  object  primitive  README.md  syntax  system

'./Domain [╍🌐╍🧭╍]/object':
0_operation-types_🔍  object-type.enum.ts

'./Domain [╍🌐╍🧭╍]/object/0_operation-types_🔍':
1_primitive-operators.ts  2_concept-operators.ts  4_graph-operators.ts

'./Domain [╍🌐╍🧭╍]/primitive':
type.enum.ts

'./Domain [╍🌐╍🧭╍]/syntax':
0_1_0_structure-concept.ts                stream-direction.enum.ts
0_1_2_2_structure-implementation.enum.ts  stream.tokens.enum.ts

'./Domain [╍🌐╍🧭╍]/system':
optimizer.ts                  remote-shell-server.ts
remote-shell-message.enum.ts  un-parser.ts

'./Model [╍⬡╍ꙮ╍▦╍]':
maths  object  README.md  syntax  util

'./Model [╍⬡╍ꙮ╍▦╍]/maths':
2d  3d  matrix  quaternion  vector

'./Model [╍⬡╍ꙮ╍▦╍]/maths/2d':
decomposition-2d.ts  transform-2d.ts  transformation-2d.ts  util.ts

'./Model [╍⬡╍ꙮ╍▦╍]/maths/3d':
decomposition-3d.ts  transform-3d.ts  transformation-3d.ts  util.ts

'./Model [╍⬡╍ꙮ╍▦╍]/maths/matrix':
index.ts  matrix-3.ts  matrix-4.ts  matrix.wrapt.org

'./Model [╍⬡╍ꙮ╍▦╍]/maths/quaternion':
index.ts  quaternion.wrapt.org

'./Model [╍⬡╍ꙮ╍▦╍]/maths/vector':
index.ts  vector.wrapt.org

'./Model [╍⬡╍ꙮ╍▦╍]/object':
0_1_object-structure.ts       1_0_0_object-builtin.ts  1_4_0_environment.ts
0_2_object-elements.ts        1_0_1_object.ts
0_3_abstract-graph-object.ts  1_1_object.singleton.ts

'./Model [╍⬡╍ꙮ╍▦╍]/syntax':
1_1_0_expression-elements.ts

'./Model [╍⬡╍ꙮ╍▦╍]/util':
1_ubiquitous-util.ts  3_0_object-util.ts  3_builtin_util.ts

./spec:
Model

./spec/Model:
object

./spec/Model/object:
1_0_object.spec.d.ts  1_0_object.spec.js.map
1_0_object.spec.js    1_0_object.spec.ts

'./View [╍🌏╍]':
object  syntax  transformation-3d.ts

'./View [╍🌏╍]/object':
index.ts  object-elements.ts

'./View [╍🌏╍]/syntax':
index.ts

**/

/**
 
# Example: list mode:

    ```
        One block, without a relative path.

    ```

ls -l
total 20
drwxrwxr-x 6 ultrx11 ultrx11 4096 Jun  1 00:08 'Domain [╍🌐╍🧭╍]'
-rw-rw-r-- 1 ultrx11 ultrx11  152 Jun  1 00:08  index.ts
drwxrwxr-x 6 ultrx11 ultrx11 4096 Jun  1 00:08 'Model [╍⬡╍ꙮ╍▦╍]'
drwxrwxr-x 3 ultrx11 ultrx11 4096 Jun  1 00:08  spec
drwxrwxr-x 4 ultrx11 ultrx11 4096 Jun  1 00:08 'View [╍🌏╍]'

**/


/**
# Example: list mode, recursive:  
 
    ```
       Multiple blocks, each with the relative path,   AND    total number of directories:        
    
    ```

ls -lR
.:
total 20
drwxrwxr-x 6 ultrx11 ultrx11 4096 Jun  1 00:08 'Domain [╍🌐╍🧭╍]'
-rw-rw-r-- 1 ultrx11 ultrx11  152 Jun  1 00:08  index.ts
drwxrwxr-x 6 ultrx11 ultrx11 4096 Jun  1 00:08 'Model [╍⬡╍ꙮ╍▦╍]'
drwxrwxr-x 3 ultrx11 ultrx11 4096 Jun  1 00:08  spec
drwxrwxr-x 4 ultrx11 ultrx11 4096 Jun  1 00:08 'View [╍🌏╍]'

'./Domain [╍🌐╍🧭╍]':
total 24
-rwxrwxr-x 1 ultrx11 ultrx11  408 Jun  1 00:08 4_0_0_meta.ts
drwxrwxr-x 3 ultrx11 ultrx11 4096 Jun  1 00:08 object
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 primitive
-rwxrwxr-x 1 ultrx11 ultrx11   50 Jun  1 00:08 README.md
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 syntax
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 system

'./Domain [╍🌐╍🧭╍]/object':
total 8
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 0_operation-types_🔍
-rwxrwxr-x 1 ultrx11 ultrx11 1039 Jun  1 00:08 object-type.enum.ts

'./Domain [╍🌐╍🧭╍]/object/0_operation-types_🔍':
total 12
-rwxrwxr-x 1 ultrx11 ultrx11  714 Jun  1 00:08 1_primitive-operators.ts
-rwxrwxr-x 1 ultrx11 ultrx11 2203 Jun  1 00:08 2_concept-operators.ts
-rwxrwxr-x 1 ultrx11 ultrx11  114 Jun  1 00:08 4_graph-operators.ts

'./Domain [╍🌐╍🧭╍]/primitive':
total 4
-rw-rw-r-- 1 ultrx11 ultrx11 261 Jun  1 00:08 type.enum.ts

'./Domain [╍🌐╍🧭╍]/syntax':
total 20
-rwxrwxr-x 1 ultrx11 ultrx11 4732 Jun  1 00:08 0_1_0_structure-concept.ts
-rwxrwxr-x 1 ultrx11 ultrx11 3081 Jun  1 00:08 0_1_2_2_structure-implementation.enum.ts
-rw-rw-r-- 1 ultrx11 ultrx11   69 Jun  1 00:08 stream-direction.enum.ts
-rw-rw-r-- 1 ultrx11 ultrx11  111 Jun  1 00:08 stream.tokens.enum.ts

'./Domain [╍🌐╍🧭╍]/system':
total 16
-rw-rw-r-- 1 ultrx11 ultrx11 797 Jun  1 00:08 optimizer.ts
-rw-rw-r-- 1 ultrx11 ultrx11  72 Jun  1 00:08 remote-shell-message.enum.ts
-rw-rw-r-- 1 ultrx11 ultrx11 288 Jun  1 00:08 remote-shell-server.ts
-rw-rw-r-- 1 ultrx11 ultrx11 474 Jun  1 00:08 un-parser.ts

'./Model [╍⬡╍ꙮ╍▦╍]':
total 20
drwxrwxr-x 7 ultrx11 ultrx11 4096 Jun  1 00:08 maths
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 object
-rwxrwxr-x 1 ultrx11 ultrx11   60 Jun  1 00:08 README.md
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 syntax
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 util

'./Model [╍⬡╍ꙮ╍▦╍]/maths':
total 20
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 2d
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 3d
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 matrix
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 quaternion
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 vector

'./Model [╍⬡╍ꙮ╍▦╍]/maths/2d':
total 8
-rw-rw-r-- 1 ultrx11 ultrx11    0 Jun  1 00:08 decomposition-2d.ts
-rw-rw-r-- 1 ultrx11 ultrx11 1630 Jun  1 00:08 transform-2d.ts
-rw-rw-r-- 1 ultrx11 ultrx11    0 Jun  1 00:08 transformation-2d.ts
-rw-rw-r-- 1 ultrx11 ultrx11  144 Jun  1 00:08 util.ts

'./Model [╍⬡╍ꙮ╍▦╍]/maths/3d':
total 4
-rw-rw-r-- 1 ultrx11 ultrx11    0 Jun  1 00:08 decomposition-3d.ts
-rw-rw-r-- 1 ultrx11 ultrx11 2463 Jun  1 00:08 transform-3d.ts
-rw-rw-r-- 1 ultrx11 ultrx11    0 Jun  1 00:08 transformation-3d.ts
-rw-rw-r-- 1 ultrx11 ultrx11    0 Jun  1 00:08 util.ts

'./Model [╍⬡╍ꙮ╍▦╍]/maths/matrix':
total 24
-rwxrwxr-x 1 ultrx11 ultrx11 9334 Jun  1 00:08 index.ts
-rw-rw-r-- 1 ultrx11 ultrx11  240 Jun  1 00:08 matrix-3.ts
-rw-rw-r-- 1 ultrx11 ultrx11  348 Jun  1 00:08 matrix-4.ts
-rw-rw-r-- 1 ultrx11 ultrx11  162 Jun  1 00:08 matrix.wrapt.org

'./Model [╍⬡╍ꙮ╍▦╍]/maths/quaternion':
total 4
-rw-rw-r-- 1 ultrx11 ultrx11   0 Jun  1 00:08 index.ts
-rw-rw-r-- 1 ultrx11 ultrx11 662 Jun  1 00:08 quaternion.wrapt.org

'./Model [╍⬡╍ꙮ╍▦╍]/maths/vector':
total 12
-rwxrwxr-x 1 ultrx11 ultrx11 6426 Jun  1 00:08 index.ts
-rw-rw-r-- 1 ultrx11 ultrx11 2410 Jun  1 00:08 vector.wrapt.org

'./Model [╍⬡╍ꙮ╍▦╍]/object':
total 36
-rwxrwxr-x 1 ultrx11 ultrx11  1600 Jun  1 00:08 0_1_object-structure.ts
-rwxrwxr-x 1 ultrx11 ultrx11  2258 Jun  1 00:08 0_2_object-elements.ts
-rw-rw-r-- 1 ultrx11 ultrx11  1307 Jun  1 00:08 0_3_abstract-graph-object.ts
-rw-rw-r-- 1 ultrx11 ultrx11     0 Jun  1 00:08 1_0_0_object-builtin.ts
-rwxrwxr-x 1 ultrx11 ultrx11 14125 Jun  1 00:08 1_0_1_object.ts
-rw-rw-r-- 1 ultrx11 ultrx11   247 Jun  1 00:08 1_1_object.singleton.ts
-rwxrwxr-x 1 ultrx11 ultrx11  3010 Jun  1 00:08 1_4_0_environment.ts

'./Model [╍⬡╍ꙮ╍▦╍]/syntax':
total 4
-rwxrwxr-x 1 ultrx11 ultrx11 2004 Jun  1 00:08 1_1_0_expression-elements.ts

'./Model [╍⬡╍ꙮ╍▦╍]/util':
total 24
-rwxrwxr-x 1 ultrx11 ultrx11 1462 Jun  1 00:08 1_ubiquitous-util.ts
-rwxrwxr-x 1 ultrx11 ultrx11 8438 Jun  1 00:08 3_0_object-util.ts
-rwxrwxr-x 1 ultrx11 ultrx11 5441 Jun  1 00:08 3_builtin_util.ts

./spec:
total 4
drwxrwxr-x 3 ultrx11 ultrx11 4096 Jun  1 00:08 Model

./spec/Model:
total 4
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 object

./spec/Model/object:
total 8
-rw-rw-r-- 1 ultrx11 ultrx11   0 Jun  1 00:08 1_0_object.spec.d.ts
-rw-rw-r-- 1 ultrx11 ultrx11  43 Jun  1 00:08 1_0_object.spec.js
-rw-rw-r-- 1 ultrx11 ultrx11 115 Jun  1 00:08 1_0_object.spec.js.map
-rw-rw-r-- 1 ultrx11 ultrx11   0 Jun  1 00:08 1_0_object.spec.ts

'./View [╍🌏╍]':
total 12
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 object
drwxrwxr-x 2 ultrx11 ultrx11 4096 Jun  1 00:08 syntax
-rw-rw-r-- 1 ultrx11 ultrx11  278 Jun  1 00:08 transformation-3d.ts

'./View [╍🌏╍]/object':
total 0
-rw-rw-r-- 1 ultrx11 ultrx11 0 Jun  1 00:08 index.ts
-rw-rw-r-- 1 ultrx11 ultrx11 0 Jun  1 00:08 object-elements.ts

'./View [╍🌏╍]/syntax':
total 0
-rw-rw-r-- 1 ultrx11 ultrx11 0 Jun  1 00:08 index.ts
ultrx11@9570:~/3_0__ OPERATION/Tool/lsthree/node_modules/wrapt.co_re/src$


**/