
| Task/Category      | Command            | Arguments                        | Description                                           |
| ------------------ | ------------------ | -------------------------------- | ----------------------------------------------------- |
| Navigation         | `cd`               | `<directory>`                    | Change directory                                      |
|                    |                    | `~`                              | Change to the user's home directory                   |
|                    |                    | `<path>`                         | Change directory by path definition                   |
| File Operations    | `ls`               | `-a`                             | List all files and directories, including hidden ones |
|                    |                    | `-l`                             | Long format listing                                   |
|                    |                    | `-la`                            | Combined option to list all files in long format      |
|                    | `mkdir`            | `<directory>`                    | Make directory                                        |
|                    | `rmdir`            | `<directory>`                    | Remove directory                                      |
|                    | `cp`               | `-r` or `-R`                     | Copy directories recursively                          |
|                    |                    | `-f`                             | Force copy, overwrite existing files                  |
|                    | `mv`               | `<source>` `<destination>`       | Move or rename files or directories                   |
|                    | `rm`               | `-rf`                            | Remove directories and their contents recursively     |
|                    |                    | `-f`                             | Force removal, no confirmation prompts                |
|                    | `touch`            | `<file>`                         | Create an empty file                                  |
| Text Manipulation  | `cat`              | `<file>`                         | Concatenate and display file contents                 |
|                    | `more`/`less`      | `<file>`                         | Display file contents one page at a time              |
|                    | `head`             | `<file>`                         | Display the beginning of a file                       |
|                    | `tail`             | `<file>`                         | Display the end of a file                             |
|                    | `grep`             | `<pattern>` `<file>`             | Search for patterns in files                          |
|                    | `find`             | `<directory>` `-name <filename>` | Search for files and directories                      |
|                    | `chmod`            | `<permissions>` `<file>`         | Change file permissions                               |
|                    | `chown`            | `<user>:<group>` `<file>`        | Change file ownership                                 |
|                    | `ln`               | `<source>` `<link>`              | Create links between files                            |
| System Information | `uname`            | `-a`                             | Print system information                              |
|                    | `df`               | `<directory>`                    | Display disk space usage                              |
|                    | `du`               | `<directory>`                    | Display disk usage statistics                         |
|                    | `top`, `htop`      |                                  | Display system processes                              |
|                    | `free`             |                                  | Display amount of free and used memory                |
| Networking         | `ping`             | `<hostname/IP>`                  | Send ICMP echo requests to network hosts              |
|                    | `traceroute`       | `<hostname/IP>`                  | Print the route packets take to network hosts         |
|                    | `ifconfig`/`ip`    | `<interface>`                    | Configure network interfaces                          |
|                    | `ssh`              | `<user@hostname>`                | Secure shell, used for remote login                   |
|                    | `scp`              | `<source>` `<destination>`       | Secure copy, used for secure file transfer            |
| Package Management | `apt`, `apt-get`   | `<package>`                      | Package management on Debian-based systems            |
|                    | `yum`, `dnf`       | `<package>`                      | Package management on Red Hat-based systems           |
|                    | `brew`             | `<package>`                      | Package manager for macOS                             |
| Process Management | `ps`               | `-ef`                            | Display information about active processes            |
|                    | `kill`             | `<PID>`                          | Terminate processes by PID                            |
|                    | `killall`          | `<process_name>`                 | Terminate processes by name                           |
|                    | `jobs`, `fg`, `bg` |                                  | Manage foreground and background processes            |
|                    | `nice`             | `<priority>` `<command>`         | Modify the priority of processes                      |
